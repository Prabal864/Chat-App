import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeletons";
import Message from "./Message";
import { RiMessage2Fill } from "react-icons/ri";
import useListenMessages from "../../hooks/useListenMessages";


const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='text-sm text-gray-200 '>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef} >
						<Message message={message} />
					</div>
				))}
			{loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<div className="flex flex-col items-center justify-center h-full min-h-screen -translate-y-20 text-black">
				<RiMessage2Fill className="text-6xl mb-4" />
				<p className="text-center text-xl">Send a message to start the conversation</p>
			</div>
			)}
		</div>
	);
};

export default Messages;
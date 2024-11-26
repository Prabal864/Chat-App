import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import {useAuthContext} from "../../context/AuthContext";
import { TiMessages } from "react-icons/ti";
import UserAnimation from "../typingAnimation/UserAnimation";
import { useEffect } from "react";

const MessageContainer = ({conversation}) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="h-screen flex flex-col bg-white">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="bg-[#22242b] px-4 py-2 flex items-center gap-4">
						<div className="avatar p-1">
							<div className={`w-14 h-14 border-[#f3f1f2] avatar`}>
								<img
									src={selectedConversation.profilePic}
									alt="user avatar"
									className="object-cover w-full h-full"
								/>
							</div>
						</div>
						<span className="text-[#ebe8e8] font-bold text-3xl">{selectedConversation.username}</span>
					</div>
					<div className="flex-grow overflow-y-auto px-3 text-md font-bold bg-[#e7e9ed] "> 
						<Messages /> 
					</div>
					<div className="sticky bottom-0 bg-[#22242b] p-0">
						<MessageInput />
					</div>
				</>
			)}
		</div>
	);
};

export default MessageContainer;


const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div
			className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black relative"
		>
			{/* Floating Animation Background */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
			</div>

			{/* Main Content */}
			<div className="z-10 px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-4">
				<p className="text-2xl font-extrabold text-white">
					<UserAnimation username={authUser.username}/>
				</p>
				<p className="text-lg md:text-xl">
					Select a chat to start messaging
				</p>
				<TiMessages className="text-7xl text-blue-400" />
			</div>
		</div>
	);
};


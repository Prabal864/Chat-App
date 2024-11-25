import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser?._id;
  	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-sky-600" : "bg-[#3c6e71]";
	const formattedTime = extractTime(message.createdAt);

	return (
		<div className={`chat ${fromMe ? "chat-end" : "chat-start"}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white text-lg ${bubbleBgColor} p-2 `}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center font-bold text-[#0b0c0e]'>{formattedTime}</div>
		</div>
	);
};

export default Message;
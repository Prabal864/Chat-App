import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
	const{selectedConversation,setSelectedConversation} = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const {onlineUsers} = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
	
	return (
		<>
			<div className={`flex items-center gap-4 shadow-xl font-medium hover:bg-[#125557] hover:text-[#fcfcfc] rounded-lg p-4 cursor-pointer transition-all duration-300 
				${isSelected?"bg-white text-black":""}`}
				onClick={()=>setSelectedConversation(conversation)}
				>
				<div className="avatar">
					<div className={`w-14 h-14 border-[#f3f1f2] overflow-hidden avatar ${isOnline?"online":""}`}>
						<img
							src={conversation.profilePic}
							alt="user avatar"
							className="object-cover w-full h-full"
						/>
					</div>
				</div>

				{/* User Details */}
				<div className="flex-1">
					<p className="font-bold text-md">{conversation.username}</p>
					<p className="text-sm text-[#8D99AE] truncate">
						Last message: {conversation.lastMessage || "No messages yet"}
					</p>
				</div>
			</div>

			{/* Divider */}
			{!lastIdx && <div className="bg-[#8D99AE] h-px mx-4"></div>}
		</>
	);
};

export default Conversation;

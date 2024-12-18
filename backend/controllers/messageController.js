import Conversation from "../model/conversationModel.js";
import Message from "../model/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessages = async (req,res) =>{
   try {
      const {message} = req.body;
      const {id:receiverId} = req.params; //Receiver's Id
      const senderId = req.user._id; // Sender's Id

      let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

      if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}
      
      const newMessage = new Message({
         senderId,
         receiverId,
         message
      });

      if(newMessage){
         conversation.messages.push(newMessage._id);
      }

      await conversation.save();
      await newMessage.save();

      const receiverSocketId = getReceiverSocketId(receiverId);
      if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

      res.status(200).json(newMessage);
   }
   catch(error){
      console.log("Error in SendMessage controller",error.message)
      res.status(500).json({error:"Internal Server Error"});
   }
};
 
export const getMessages = async(req,res) =>{
   try{
      const {id:userToChatId} = req.params;
      const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages");

      if (!conversation) return res.status(200).json([]);
		const messages = conversation.messages;
		res.status(200).json(messages);

   }catch(error) {
      console.log("Error in getting Message controller",error.message)
      res.status(500).json({error:"Internal Server Error"});
   }
};

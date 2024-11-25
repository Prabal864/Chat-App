import mongoose from "mongoose";
const {Schema} = mongoose;

const messageSchema = new Schema({

    senderId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    receiverId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    message: {
        type: String,
        required: true
    }
    
},{timestamps: true});

const Message = mongoose.model("Message",messageSchema);
export default Message;

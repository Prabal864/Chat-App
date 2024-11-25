import mongoose from "mongoose";
const {Schema} = mongoose;

const coversationSchema = new Schema({
    participants:[
        {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
        }
    ],

    messages:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref:"Message",
          required: true,
          default:[]
        },
    ],

},{timestamps:true});

const Conversation = mongoose.model("Conversation",coversationSchema);
export default Conversation;

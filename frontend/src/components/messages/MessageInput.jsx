import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const[message,setMessage] = useState("");
  const {loading,sendMessage} = useSendMessage();

  const handleMessageSubmit = async (e) =>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-6 py-4 bg-[#22242b] shadow-lg flex items-center justify-between relative"
    onSubmit={handleMessageSubmit}  >
      {/* Input Field */}
      <input
        type="text"
        className="bg-[#eeebeb] text-black font-bold  rounded-xl w-full py-2 px-4 text-xl border-2 border-transparent focus:border-[#f2f2f3] focus:ring-2 focus:ring-[#72bd5b] outline-none placeholder:text-gray-400"
        placeholder="Type a message..."
        value={message}
				onChange={(e) => setMessage(e.target.value)}
      />

      {/* Send Button */}
      <button type="submit" className="absolute right-4 ">
        {loading ? <div className='loading loading-spinner'></div> : <div className="p-5 bg-black " ><BsSend /></div>}
      </button>
    </form>
  );
};

export default MessageInput;


import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-hot-toast";

const StartChatButton = () => {
  const { authUser } = useAuthContext();

  const handleStartChattingClick = (e) => {
    if (!authUser) {
      e.preventDefault(); // Prevent navigation
      toast.error("SignUp First"); // Show error toast
    }
  };

  return (
    <div className="group flex flex-col items-start w-full">
      {authUser ? (
        <Link
          to="/home"
          className="block w-full text-left px-4 py-4 text-xl text-white bg-black rounded-md "
        >
          Chat
        </Link>
      ) : (
        <button
          onClick={handleStartChattingClick}
          className="block w-full text-center px-4 py-4 text-lg text-white bg-black cursor-not-allowed rounded-md " 
        >
          Chat
        </button>
      )}
    </div>
  );
};

export default StartChatButton;

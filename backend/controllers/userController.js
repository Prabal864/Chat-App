import User from "../model/userModel.js";

export const getUserForSidebar = async (req,res)=>{
    try {
      const loggedInUserId = req.user._id;

      const allFilteredUsers = await User.find({_id:{$ne: loggedInUserId}}).select("-password") ;
      res.status(200).json(allFilteredUsers);
        
    } catch (error) {
      console.log("Error in getting user for sidebar",error.message)
      res.status(500).json({error:"Internal Server Error"});
    }
};

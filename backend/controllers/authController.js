import User from "../model/userModel.js"
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokens.js";

export const signupUser = async (req,res)=>{
    try {
		const { fullname, username, password, confirmPassword, gender, email } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		// HASH PASSWORD HERE
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password,salt);

		// https://avatar-placeholder.iran.liara.run/
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = new User({
			fullname,
			username,
			password: hashedPassword,
			gender,
			email,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});

		if(newUser){
			generateTokenAndSetCookie(newUser._id,res);
			await newUser.save();
			res.status(201).json({
				_id:newUser._id,
				fullname:newUser.fullname,
				username:newUser.username,
				email:newUser.email,
				gender:newUser.gender,
				profilePic:newUser.profilePic,
				message:"User Created"
			})
			console.log("User Created");
		}else{
			res.status(400).json({error:"Invalid Input"})
		}

	}catch(error) {
		console.log("Error in signup controller", error.stack);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const loginUser = async (req,res)=>{
    try {
		const {username,password} = req.body;
		const user = await User.findOne({username});
		const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");
		if(!user || !isPasswordCorrect){
			return res.status(400).json({error:"Invalid Credentials"});
		}

		generateTokenAndSetCookie(user._id,res);
		return res.status(200).json({
			_id:user._id,
			username:user.username,
			email:user.email,
			gender:user.gender,
			profilePic:user.profilePic,
			message:"User Logged-IN"
		})

	} catch (error) {
		console.log("Error in Login controller", error.message);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logoutUser = (req,res)=>{
    try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
    },

    username: {
        type: String,
        required: [true, "Name is required"],
        unique: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true,"Email Already Exists"],
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, "Please enter a valid email"],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
    },

    gender:{
        type: String,
        required: true,
        
    },

    profilePic:{
        type:String,
        default:"",
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;
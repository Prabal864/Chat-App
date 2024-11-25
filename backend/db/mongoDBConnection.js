import mongoose from "mongoose";

const connectToMongoDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error:",error.message);
    }
};

export default connectToMongoDB;

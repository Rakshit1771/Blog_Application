import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI )
        console.log("Database Connect Succesfully");
        
    } catch (error) {
        console.log("DB Connection Failde", error);
        
    }
}
export default connectDB
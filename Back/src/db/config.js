import mongoose from "mongoose";
import DB_CONNECTION from "../constants/connectionData";

export const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://michiqueli:Rasputin1407@cluster0.xk5yz6w.mongodb.net/?retryWrites=true&w=majority");
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}


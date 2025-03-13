import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();    
const MONGO_URI=process.env.MONGODB;


const connectDB=async()=>{
    try{
        const connection=await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully");
        
    }catch(err){
        console.log(err);
    }   
}

export default connectDB;
import mongoose from 'mongoose';


let isConnected = false;
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    // check connection
    if(!process.env.MONGODB_URI) return console.log("MONGODB_URI NOT FOUND");

    // check if already connected
    if(isConnected) return console.log("Already connected to MongoDB");
    try{
        await mongoose.connect(process.env.MONGODB_URI,)

        // check if c
        isConnected = true;

        console.log("Connected to MongoDB");

    } catch (error: any) {
        console.log("FAILED TO CONNECT TO MONGODB", error);
    }

}


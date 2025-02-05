import mongoose from "mongoose";



export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB);
        console.log(`mongodb connected:${conn.connection.host} `)
    } catch (error) {
        console.error(`error: ${error.messsage} `);

    }
}
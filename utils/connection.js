import mongoose from 'mongoose';

export async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Successfully connected to MongoDB.');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error.message);
    }
}

import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://gowtham:wjtl42mIIsLpcI9M@cluster0.ovgstfb.mongodb.net/ecommerce?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected');
    } catch (error: any) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;

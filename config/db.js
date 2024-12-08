require("dotenv").config(); // Load environment variables from .env
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || "mongodb+srv://anuj1994k:anuj%4012345@cluster0.b88lf.mongodb.net/blog-backend-app?retryWrites=true&w=majority&appName=Cluster0";

        if (!uri) {
            throw new Error("MongoDB URI is not defined.");
        }

        console.log("Connecting to MongoDB...");
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectDB; // Ensure you export the function

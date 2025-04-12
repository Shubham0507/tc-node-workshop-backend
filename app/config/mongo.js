const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Shubham-Singh:wUJp1A4h8MdmDzEr@tc-cluster.kj4rove.mongodb.net/task-management-system?retryWrites=true&w=majority&appName=tc-cluster", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
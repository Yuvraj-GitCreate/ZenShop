const mongoose = require('mongoose');

// connect DB takes every data from mongoURI

const connectDB = async () => {
    try{
        // until it gets connected it won't run further cause of the statement starting with await
        const conn =await mongoose.connect(process.env.MONGO_URI);
            console.log('MongoDB connected successfully');
    }       
    catch (error){
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);

    }
}

module.exports = connectDB;
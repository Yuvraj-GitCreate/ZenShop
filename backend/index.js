const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB =  require("./config/db");
// const userRoutes = require('./routes/authRoutes');
dotenv.config();
connectDB(); // made connect with the database


const app = express();

// to see if the backend is working or not so we build app express
app.get("/", (req,res) => {
    res.send("ZenShop Backend is working!");
})

app.use('/api/auth', require('./routes/authRoutes'));

// to the backend run on the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})
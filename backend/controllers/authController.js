const User = require('../model/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};
// register a new user

const registerUser = async(req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists'});
        }

        // TODOS: hash the password before saving to the database
        // TODOS: implement JWT token generation for authentication
        // TODOS: OTP sending and verification for email confirmation
        // TODOS: Welcome mail

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        
        const user =await User.create({ name, email, password: hashedPassword });
        if(user){
            const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP

            const message = `
            Welcome to ZenShop, ${name}! Thank you for registering. Your account has been created successfully.
            Your OTP for ZenShop registration is: ${otp}`;

            await sendEmail(email, 'Welcome to ZenShop! Your OTP for Registration', message);
            
            res.status(201).json({  
                _id: user._id,
                name: user.name,
                email: user.email,
                role: (await user).role,
                token: generateToken(user._id)
            });
        } 

        else{
            res.status(400).json({ message: 'Invalid user data' });
        }
    
    }catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};


// Login User

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if( user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
                // we are saving the generated token in the token named variable.
            });
        } else {
            res.status(400).json({ message: 'Invalid email or password' });
        }
    } 
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getUsers = async (req, res) => {
    try {
        const Users = await User.find({}).select('-password');
        res.json(Users);
    }
    catch(error){
        res.status(500).json({ message: ' Server Error'});
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUsers
}

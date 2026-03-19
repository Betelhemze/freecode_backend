import {User} from "../models/userModel.js"

 const createUser = async (req,res) =>{
    try {
        const {username, password, email} = req.body;

        //basic validation
        if(!username || !password || !email){
            return res.status(400).json({message: "Please fill in all fields"})
        }
        //check if user already exists
        const existingUser = await User.findOne({email: email.toLowerCase()});
        if (existingUser) {
          return res.status(400).json({ message: "user already exists" });
        }
        //create a new user
        const newUser = new User({
            username,
            password,
            email: email.toLowerCase(),
            loggedIn: false,
        })
        await newUser.save();
        return res.status(201).json({ message: "User created successfully",
            user: {id: newUser._id, username: newUser.username, email: newUser.email}
         });
    } catch (error){
       
        if (error.code === 11000){
            return res.status(400).json({message: "user already exists"})
        }
         return res
           .status(500)
           .json({ message: "Internal server error", error: error.message });
    }
 };
const loginUser = async (req,res) => {
    try{
         //check if user exists
         const {email,password} =req.body;

         const user = await User.findOne({
            email: email.toLowerCase()
         })
         if (!user){
            return res.status(400).json({message: "user does not exists"});
         } 
         //compare password
         const isMatch = await user.comparePassword(password);
         if (!isMatch){
            return res.status(400).json({message: "invalid password"})
         }
         res.status(200).json({
            message: "login successful", 
            user: {id: 
                user._id, 
                username: user.username,
                 email: user.email}})
    }catch(error){
        return res.status(500).json({message:"Internal server error", error: error.message});
    }
}
 export {createUser, loginUser}
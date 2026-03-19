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
        return res.status(500).json({ message: "Internal server error" });
    }
 };

 export {createUser}
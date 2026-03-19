import mongoose, {Schema} from  "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema({
    username: {type: String, 
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 6,
        maxLength: 20
    },
    password: { type: String,
        required: true,
        minLength: 6,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "please enter a valid email address"]
    },

},
 {
    timestamps: true
}
)

userSchema.pre("save", async function(){
    if (!this.isModified("password")){
        return;
    }
    this.password = await bcrypt.hash(this.password,10);
    
});
//compare password
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model("User", userSchema) // this will create a collection called "users" in the database and it will use the userSchema to define the structure of the documents in that collection.
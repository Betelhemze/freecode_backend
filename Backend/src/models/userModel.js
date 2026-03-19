import mongoose, {Schema} from  "mongoose";

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
        match: [/^\S+@\S+\.\s+$/, "please enter a valid email address"]
    },

},
 {
    timestamps: true
}
)

export const User = mongoose.model("User", userSchema) // this will create a collection called "users" in the database and it will use the userSchema to define the structure of the documents in that collection.
import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,   
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},{ timestamps: true }

);

// Create the User model
const User = mongoose.model('User', userSchema);


// Export the User model so we can use in other parts of the application
export default User;
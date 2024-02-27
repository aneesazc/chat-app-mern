import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId, // this says that the senderId will be an ObjectId from the User model
        ref: "User", // this says that the senderId will reference the User model
        required: true
    }, 
    receiverId: {
        type: mongoose.Schema.Types.ObjectId, // this says that the receiverId will be an ObjectId from the User model
        ref: "User", // this says that the receiverId will reference the User model
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;
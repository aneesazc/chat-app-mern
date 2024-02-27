import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId, // this says that the participants will be an ObjectId from the User model
            ref: "User", 
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId, // this says that the messages will be an ObjectId from the Message model
            ref: "Message",
            default: []
        }
    ]
}, {timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
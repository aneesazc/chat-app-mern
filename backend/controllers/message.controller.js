import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // this id is attached to the request object by the protectRoute middleware after verifying the token

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            }) // we dont need to create a message here because the messages array is already set to an empty array by default in the conversation model
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();

        // we can use Promise.all to run both save operations concurrently
        await Promise.all([conversation.save(), newMessage.save()]);

        // socket.io functionality here
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            console.log("receiverSocketId", receiverSocketId);
            // io.to(receiverSocketId).emit() is used to emit events to a specific client
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller", error.message)
        res.status(500).json({error: "Internal Server Error. Please try again later."});    
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params; // userToChatId is the id of the user with whom the current user wants to chat
        const senderId = req.user._id; 

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages"); // populate the messages array with the actual message documents instead of just the message ids

        if(!conversation) return res.status(200).json([]); // if there is no conversation between the two users, return an empty array

        const messages = conversation.messages;
        
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessage controller", error.message)
        res.status(500).json({error: "Internal Server Error. Please try again later."});
    }
};

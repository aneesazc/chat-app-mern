import { Server } from "socket.io";
import http from "http"; // built-in Node.js module
import express from "express";

const app = express();

const server = http.createServer(app); 
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
}); 


const userSocketMap = {}; // {userId: socketId}

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId){
        userSocketMap[userId] = socket.id;
    }

    // io.emit() is used to emit events to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // socket.on() is used to listen for events. can be used both on the server and the client side
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };

// explanation: 
// The socket server is created using the Server class from the socket.io library.
// The server is added on top of the http/express server.
// The server listens for connections and disconnections.
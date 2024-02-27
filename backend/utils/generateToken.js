// generate token and cookie

import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    }) 
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, // prevents XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV === "production" ? true : false
    })
}

export default generateToken;

// This file exports a function called generateToken that takes in a userId and a response object. 
// It generates a token using the jwt.sign method and signs it with the userId and the JWT_SECRET 
// from the .env file. It then sets the token as a cookie on the response object. 
// The cookie has a maxAge of 15 days, is httpOnly, has the sameSite set to strict, 
// and is secure if the NODE_ENV is set to production. 
// This function is used in the auth.controller.js file to generate a token when a user signs up or logs in. 
// It is also used in the protectRoute.js middleware to verify the token and get the user from the database.

// Token = Header + Payload + Signature
// Header = Algorithm + Type
// Payload = Data like userId, username, email, etc
// Signature = String generated after signing the payload with the secret key

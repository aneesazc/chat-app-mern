import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        // const token = req.headers.authorization.split(" ")[1];
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({error: "Unauthorized- No token found"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify with the secret used to sign the token

        if (!decoded) {
            return res.status(401).json({error: "Unauthorized- Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password"); // userId is the payload of the token or the id with which the token was signed

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message)
        res.status(500).json({error: "Internal Server Error. Please try again later."});
    }
}

export default protectRoute;

// this middleware gets the token from the cookie and verifies it using the jwt.verify method.
// If the token is valid, it gets the user from the database and attaches it to the request object.
// It passes on to the next middleware if everything is successful.
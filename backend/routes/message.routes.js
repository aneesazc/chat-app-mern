import express from 'express';
import { getMessage, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get("/:id", protectRoute, getMessage) // get message between curr user and user with id :id from the url
router.post("/send/:id", protectRoute, sendMessage) // send message from curr user(logged in user who has token set to cookie) to user with id :id from the url

export default router;
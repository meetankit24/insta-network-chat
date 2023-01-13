import express from 'express'
import { createChat, findChat, userChats } from '../Controllers/ChatController.js';
const router = express.Router()

router.post('/', createChat);
//specific chat of specific user
router.get('/:userId', userChats);
//specific chat with specific user means private chat
router.get('/find/:firstId/:secondId', findChat);

export default router; 
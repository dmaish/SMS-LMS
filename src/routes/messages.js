import express from 'express';
import MessagesController from '../modules/messages';

const router = express.Router();

router.post(
    '/',
    MessagesController.postMessage
);

export default router;
import express from 'express';
import MessagesController from '../modules/messages';

const router = express.Router();

router.post(
    '/',
    MessagesController.postMessage
);
router.get(
    '/getAllReceivedMessages',
    MessagesController.getAllReceivedMessages,
);
router.get(
    '/getAllSentMessages',
    MessagesController.getAllSentMessages,
)

export default router;
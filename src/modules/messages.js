import Messages from '../database/models/messages';
import mongoose from 'mongoose';

export default class MessagesController {
    static async postMessage(req, res){
    try {
        const newMessage = await new Messages({
            _id:  new mongoose.Types.ObjectId(),
            status: 'sent',
            recipientNumber: req.body.recipientNumber,
            senderNumber: req.body.senderNumber,
            message: req.body.message,
        });
        

        const message = await newMessage.save();
        return res.status(201).json({
            notification: 'message sent successfully',
            message,
        });
    } catch (err) {
        console.error(err);
    }
}

static async getAllReceivedMessages(req, res){
    try {
        const userPhoneNumber = req.body.userPhoneNumber;
        const userMessages = Messages.find({recipientNumber: userPhoneNumber});
        return res.status(200).json({
            notification: 'Received messages retrieval successful',
            userMessages,
        });
        
    } catch (err) {
        console.error(err);
    }
}

static async getAllSentMessages(){
    const userPhoneNumber = req.body.userPhoneNumber;
    const userMessages = Messages.find({senderNumber: userPhoneNumber});
    return res.status(200).json({
        notification: 'Sent messages retrieval successful',
        userMessages,
    });
}

}
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    message: { type: String, required: true },
    status: { type: String, required: true },
    recipientNumber: { type: String, required: true },
    senderNumber: { type: String, required: true },
});

export default mongoose.model('message', MessageSchema);

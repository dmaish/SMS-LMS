import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true }
});

export default mongoose.model('Contact', ContactsSchema);
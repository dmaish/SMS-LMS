import mongoose from 'mongoose';

const UsersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
});

export default mongoose.model('User', UsersSchema);

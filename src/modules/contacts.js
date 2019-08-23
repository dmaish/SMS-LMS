import ContactsModel from '../database/models/contacts';
import mongoose from 'mongoose';

export default class ContactsModule {

    static async addContact(req, res) {
        try {
            const Contact = await new ContactsModel({
            _id:  new mongoose.Types.ObjectId(),
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            });

            const newContact = await Contact.save();
            return res.status(201).json({
                message: 'Contact was created successfully',
                newContact
            });
        } catch (error) {
            console.log(error);
        }
    }

}
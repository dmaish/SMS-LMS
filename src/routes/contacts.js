import express from 'express';
import ContactsModule from '../modules/contacts';
import HelperServices from '../helpers/services';

const router = express.Router();

// router.get('/', ContactsModule.getContacts);
// router.get('/:id', ContactsModule.getContact);
router.post(
    '/',
    HelperServices.userSignedIn,
    ContactsModule.addContact);
// router.patch('/:id', ContactsModule.updateContact);
// router.delete('/:id', ContactsModule.deleteContact);

export default router;

import express from 'express';
import Users from '../modules/users';

const router = express.Router();

router.get(
    '/getAllUsers',
    Users.getAllUsers,
);

router.delete(
    '/deleteUser',
    Users.deleteUser,
)

export default router;
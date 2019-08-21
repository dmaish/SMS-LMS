import express from 'express';
import Authentication from '../modules/authentication';

const router = express.Router();

router.post(
    '/register',
    Authentication.register,
);

export default router;
import bcrypt from 'bcrypt';
import User from '../database/models/user';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';


export default class Authentication {
    
    static async register(req, res){
        const uniqueId = new mongoose.Types.ObjectId();
        const salt = 15;
        try {
        bcrypt.hash(req.body.password, salt, async(err, hashedPassword) => {
            if (err){
                res.status(500)
                .json({
                message: err,
            })
            } else {
                const registeredUser = await new User ({
                    _id: uniqueId,
                    name: req.body.name,
                    phoneNumber: req.body.phoneNumber,
                    password: hashedPassword
                });

            const newUser = await registeredUser.save();
            return res.status(201).json({
                message: 'successfully registered user',
                user: newUser,
            });
            }
        }
    );
        } catch(err) {
            res.status(500)
            .json({
                message: err,
            })
        }
    }


    static async login(req, res){
    try {
        const token = await jwt.sign({
            name: req.body.name,
            password: req.body.password,
        },
            'JWT_SECRET_KEY',
            { expiresIn: "1h" }
        );
    
        const { name } = jwtDecode(token);
        res.status(200).json({
            message: 'Successful login',
            token
        });
        } catch (error) {
        console.log(error);
        }
    
    }
}
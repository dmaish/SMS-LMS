import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import AuthRoute from '../src/routes/auth';
import ContactsRoute from '../src/routes/contacts';
import MessagesRoute from '../src/routes/messages';
import UsersRoute from '../src/routes/users';

const mongoose = require('mongoose');


const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/SMS_DB', { useNewUrlParser: true });

// middleware setup
app.use(cors());
app.use(morgan('dev'));
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/auth', AuthRoute);
app.use('/api/v1/contacts', ContactsRoute);
app.use('/api/v1/messages', MessagesRoute);
app.use('/api/v1/users', UsersRoute);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


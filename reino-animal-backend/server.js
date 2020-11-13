import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pusher from 'pusher';

//app config
const app = express();
const port = process.env.PORT || 8000;

//middlerwares
app.use(cors());
app.use(express.json());

//db config

//api routes
app.get('/', (req, res) => res.status(200).send('Reino Animal API'));

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`))
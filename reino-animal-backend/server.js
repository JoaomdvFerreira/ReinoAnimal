import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pusher from 'pusher';

import mongoData from "./mongoData.js";

//app config
const app = express();
const port = process.env.PORT || 8000;

//middlewares
app.use(cors());
app.use(express.json());

//db config
const mongoURI = 'mongodb+srv://admin:CE6XtY5ezE1s5ez2@reino-animal-cluster.ifkqn.mongodb.net/reino-animal-db?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB connected')
})

//api routes

//get connection
app.get('/', (req, res) => res.status(200).send('Reino Animal API'));

//get all products
app.get('/get/productList', (req, res) => {
    mongoData.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            let products = [];
            data.map((productData) => {
                const productInfo = {
                    id: productData._id,
                    name: productData.name,
                    description: productData.description,
                    price: productData.price,
                    imageBase64: productData.imageBase64
                }
                products.push(productInfo);
            });

            res.status(200).send(products);
        }
    });
});

//post new product
app.post('/new/product', (req, res) => {
    const product = req.body

    mongoData.create(product, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

//get all blogs
app.get('/get/blogList', (req, res) => {
    mongoData.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            let blogs = [];
            data.map((blogData) => {
                const blogInfo = {
                    id: blogData._id,
                    title: blogData.title,
                    description: blogData.description,
                    image: blogData.imageBase64
                }

                blogs.push(blogInfo);
            })
            res.status(200).send(blogs)
        }
    })
})

//post new blog
app.post('/new/blog', (req, res) => {
    const blog = req.body;

    mongoData.create(blog, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`))
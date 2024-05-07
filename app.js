const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Connecting to MongoDB...');
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model('Post', postSchema);

app.get('/', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.render('index', { posts });
    } catch (err) {
        console.log(err);s
    }
});

app.get('/new', (req, res) => {
    res.render('new');
});

app.post('/new', async (req, res) => {
    try {
        await Post.create(req.body.post);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

app.get('/edit/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render('edit', { post });
    } catch (err) {
        console.log(err);
    }
});

app.post('/edit/:id', async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, req.body.post);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

app.post('/delete/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

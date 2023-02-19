const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/post');
const ejs = require('ejs');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db');

app.set('view engine', 'ejs');
app.use(express.static('public')); 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', async (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  const posts = await Post.find({})
  res.render('index',{posts})
});
app.get('/about', (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  res.render('about')
});
app.get('/add_post', (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  res.render('add_post')
});
app.get('/index',async (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  const posts = await Post.find({})
  res.render('index',{posts})
});
app.get('/post/:id',async (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  const post = await Post.find({_id:req.params.id})
  res.render('post.ejs',{
    post
  })
});

app.post('/postcreated', (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  console.log(req.body)
  Post.create(req.body)
  res.redirect('/')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is started on ${port}`);
});
 
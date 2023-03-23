const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/post');
const ejs = require('ejs');
const methodOverride = require('method-override')
const app = express();
const bodyParser = require('body-parser')
const pages = require('./controllers/pages.js');


mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db');

app.set('view engine', 'ejs');
app.use(express.static('public')); 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method',methods=['GET','POST']))
app.use(bodyParser.urlencoded())

app.get('/', pages.indexpage);
app.get('/about', pages.aboutpage);
app.get('/add_post',pages.postpage);
app.get('/index',pages.indexpage);
app.get('/post/:id',pages.postDetailPage);
app.post('/postcreated', pages.postCreator);
app.get('/post/:id/edit',pages.postEditPage);
app.post('/post/:id/edit',pages.postEditor);
app.delete('/post/:id/edit',pages.postDeletor);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is started on ${port}`);
});
 
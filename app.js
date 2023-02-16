const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')); 

app.get('/', (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  res.render('index')
});
app.get('/about', (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  res.render('about')
});
app.get('/add_post', (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  res.render('add_post')
});
app.get('/index', (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  res.render('index')
});
app.get('/post', (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  res.render('post')
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server is started on ${port}`);
});
 
const Post = require('.././models/post');
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override')
const app = express();
const bodyParser = require('body-parser')
let pages = {};

pages.indexpage = async (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  const posts = await Post.find({});
  res.render('index', { posts });
};

pages.aboutpage = (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  res.render('about');
};
pages.postpage = (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  res.render('add_post');
};

pages.postDetailPage = async (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  const post = await Post.find({ _id: req.params.id });
  res.render('post.ejs', {
    post,
  });
};

pages.postCreator = (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  console.log(req.body);
  Post.create(req.body);
  res.redirect('/');
};

pages.postEditPage = async (req, res) => {
  // res.send({ id: 1, title: 'Blog title', description: 'Blog description' });
  const post = await Post.find({ _id: req.params.id });
  console.log(req.params.id);
  res.render('edit.ejs', {
    post,
  });
};

pages.postEditor = async (req, res) => {
  const update = {
    title: req.body.title,
    detail: req.body.detail,
    date: new Date().setHours(new Date().getHours()),
  };
  console.log('edited');
  const post = await Post.findOneAndUpdate({ _id: req.params.id }, update, {
    new: true,
  });
  res.redirect('/');
};

pages.postDeletor = async (req, res) => {
    console.log("deleted")
    await Post.findByIdAndDelete(req.params.id)
  
    res.redirect('/')
  }
module.exports = pages;

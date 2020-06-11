'use strict';
const express = require('express');
const app = express();
const port = 5000;
const fs = require("fs");
const {
    v4: uuidv4
} = require('uuid');

app.use(express.json());
let blogs = require('./blogs.json');
console.log('blogs', blogs);

app.post('/blogs', (req, res) => {
    if (postIsValid(req, res)) {
        res.status(400);
        res.send('invalid info');
        return;
    }
    const blogPost = {
        id: uuidv4(),
        title: req.body.title,
        content: req.body.content
    };
    blogs.push(blogPost);
    fs.writeFileSync('./blogs.json', JSON.stringify(blogs));
    res.status(201);
    res.end('ok');
});

app.put('/blogs/:title', (req, res) => {
    if (postIsValid(req, res)) {
        res.status(400);
        res.send('invalid info');
        return;
    }
    if (fs.existsSync('./blogs.json')) {
        const blogToUpdate = blogs.find(blog => blog.title === req.params.title);
        if (checkForItem(blogToUpdate)) {
            res.status(404);
            res.send('no item found');
            return;
        }
        blogToUpdate.title = req.body.title;
        blogToUpdate.content = req.body.content;
        fs.writeFileSync('./blogs.json', JSON.stringify(blogs));
        res.send(`Ok`);
    } else {
        console.log('This post does not exist!');
    }
});

app.delete('/blogs/:title', (req, res) => {
    const blogToDelete = blogs.find(blog => blog.title === req.params.title);
    if (checkForItem(blogToDelete)) {
        res.status(404);
        res.send('no item found');
        return;
    }
    const deletedBlog = blogs.filter(blog => blog.title === blogToDelete);
    blogs.splice(deletedBlog, 1);
    fs.writeFileSync('./blogs.json', JSON.stringify(blogs));
    res.send(`Ok`);
});

app.get('/blogs', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.send(blogs);
});

function checkForItem(item) {
    if (typeof item === 'undefined') {
        return true;
    } else {
        return false;
    }
}

function postIsValid(req, res) {
    if (typeof req.body === "undefined" ||
        typeof req.body.title === "undefined" ||
        typeof req.body.content === "undefined") {
        return true;
    } else {
        return false;
    }
}

app.listen(port, () => console.log(`Example app listening at port ${port}`));
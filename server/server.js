const axios = require("axios");
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

let postsData = "<h1>Loading posts...</h1>";
let photosData = "<h1>Loading photos...</h1>";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((result) => {
    console.log(result);
    postsData = result.data;
  })
  .catch((err) => {
    console.log(err);
    postsData = "<h1>Failed to load posts</h1>";
  });

axios
  .get("https://jsonplaceholder.typicode.com/photos")
  .then((result) => {
    console.log(result);
    photosData = result.data;
  })
  .catch((err) => {
    // console.log(err);
    photosData = "<h1>Failed to load photos</h1>";
  });

app.get("/posts", function (req, res, next) {
  // res.send(`<pre>${JSON.stringify(postsData, null, 2)}</pre>`);
  res.send(postsData);
});

app.use("/photos", function (req, res, next) {
    //res.send("<h1>Homepage!!</h1>");
    res.send(photosData);
});

app.listen(3000); /// localhost:3000

//Posts: https://jsonplaceholder.typicode.com/posts,
//Photos: https://jsonplaceholder.typicode.com/photos,

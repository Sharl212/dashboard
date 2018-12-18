const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var cors = require('cors');

const app = express();

const {fetchVideos, getVideo, editVideo} = require("./methods/videos");

// * establish db connection
require("./database");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, './test-admin/build/')));

app.get("/api/videos", async (req, res)=> {
  res.status(200).send(await fetchVideos())
})

app.get("/api/videos/:id", async (req, res)=> {
  res.status(200).send(await getVideo(req.params.id))
})

app.put("/api/videos/:id", async (req, res)=> {
  console.log(req.body)
  res.status(200).send(await editVideo(req.params.id, req.body))
})

app.post("/api/login/", async (req, res)=> {
  console.log(req.body)
  if(req.body.username == "mike" && req.body.password == "123123") return res.status(200).send({"TOKEN":"123123123"})
  return res.status(401).send()
})

app.listen(process.env.PORT || 4000, ()=> console.log("API on port 4000"))
module.exports = app;

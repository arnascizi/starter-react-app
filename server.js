
const express = require('express')
const mongoose = require('mongoose');
const path = require("path");
const Album = require('./src/components/models/album')

const app = express()

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('build', options))

const port = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})


app.get('/', (req, res) => {
  res.send({title: 'Album'});
});

app.get('/add-new', async (req,res) => {
  try {
    await Album.insertMany([
      {
        title: "The Doors",
        band: "The doors",
        song: "Light my fire",
        trackLength: 9,
      },
      {
        title: "American IV: The Man Comes Around",
        band: "Johnny Cash",
        song: "Hurt",
        trackLength: 3,
      }
    ]);
    res.send("Albums added!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});

app.get('/albums', async (req, res) => {
  const album = await Album.find();

  if (album) {
    res.json(album);
  } else {
    res.send("Something went wrong");
  }
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })
})
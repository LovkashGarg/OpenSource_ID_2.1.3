const express = require('express');
const fs = require('fs');
const app = express();
const multer = require('multer');

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // specify the directory for storing uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // generate a unique filename
  }
})

const upload = multer({ storage: storage })

// Define a route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  // req.file contains information about the uploaded file
  // Save the file to a storage location (e.g., local filesystem)
  // Here we're just logging the filename
  console.log('Uploaded file:', req.file.filename);
  res.send('File uploaded successfully.');
});
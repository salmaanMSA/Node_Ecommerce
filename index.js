// require library and configure the port
const express = require('express');
var cookieParser = require('cookie-parser');
const path = require('path');
const PORT = 8000;
const db = require('./config/mongoose'); // Import mongoose.js file from config dir
const app = express();


app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// use the router
app.use('/', require('./routes'));

// Listening Port and logging success or error msg
app.listen(PORT, function(err){
   if (err) console.log("Error in server setup")
   console.log("Server listening on Port", PORT);
});

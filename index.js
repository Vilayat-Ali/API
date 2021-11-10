const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//Import Routes
const subcRoutes = require('./routes/subscribe.js');

//connecting to database
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser:true},
()=>console.log('succefully connected to database'));

//middleware
app.use(express.json());
//route middleware
app.use('/api1', subcRoutes)

app.listen(process.env.PORT, ()=>console.log(`server is running at ${process.env.PORT}`));
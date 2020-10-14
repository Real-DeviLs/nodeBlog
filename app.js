/* body parser */
const bodyParser = require('body-parser')

/* cors */
const cors = require('cors')

/* install all the things related to express */
const express= require('express');

/* execute express through this app variable */
const app= express();

/* middlewares */

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
/* import routes */
const postRoutes=require('./routes/posts')
app.use('/posts',postRoutes)
 
/* create a connection with db */
const mongoose = require('mongoose');
require('dotenv/config')
mongoose.connect(process.env.DB_CONNECTION,
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    ()=> 
    // we're connected!
    console.log("connected!")
    );

/* listen to the server */
app.listen(3000)
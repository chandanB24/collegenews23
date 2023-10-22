require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT|| 3001;
const connection = require('./db.js');
const cors  = require('cors');
const newsRoutes = require('./routes/newsRouter.js')
const adminRoutes = require('./routes/adminRouter.js')

//database connection
connection();





app.use(express.json());
app.use(cors());






app.use('/',newsRoutes)
app.use('/',adminRoutes)



app.listen(port,()=>{
    console.log(`app is running on ${port}`);
})
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/connection/db_connection");
require('dotenv').config();

const app = express();

//Middleware

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

//Routes

app.use('/api/events', require('./routes/eventRoutes'))

const startServer= async()=>{
    try {
        await connectDB(URI);
        app.listen(PORT,()=>{
            console.log(`Sever running on port : ${PORT}`)
        });
        
    } catch (error) {
        console.error('Failed to start server', error);
    }
};


startServer();


require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const authRouter = require('./routes/auth'); 
const userRouter = require('./routes/user');

const errorHandlerMiddleware = require('./middlewares/error-handler');

const connectDB = require('./db/connect');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/auth',userRouter);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000 ;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is listening on port ${port}....`))
    }catch(error){
        console.log(error);
    }
}

start();
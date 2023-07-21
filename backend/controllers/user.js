const User = require("../models/User");
const {StatusCodes} = require("http-status-codes");

const getalluser = async(req,res)=>{
    const user = await User.find().sort('createdAt');

    res.status(StatusCodes.OK).json({user,count:user.length});
}


module.exports = {getalluser};


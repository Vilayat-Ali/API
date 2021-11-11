const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
     
    firstName:
    {
        type:String,
        required:true,
        max:255

    },
    lastName:
    {
        type:String,
        required:true,
        max:255

    },
    email:
    {
        type:String,
        required:true,
        max:255

    },
    subject:
    {
        type:String,
        required:true,
        max:255
    },  
    message:
    {
        type:String,
        required:true,
        max:255
    },
}, 
{ timestamps: true }
);


module.exports = mongoose.model('Contact Us ', contactSchema);
const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
     
    fullname:
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
    subscribed:
    {
        type:Boolean,
        default:false
    },  
}, 
{ timestamps: true }
);


module.exports = mongoose.model('subcribers', subscribeSchema);
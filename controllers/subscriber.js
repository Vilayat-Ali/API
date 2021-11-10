const Subscriber = require('../models/subscribe.js');
const joi = require('@hapi/joi');

const {validationSchema } = require('./validations.js');


exports.subscriberController = async(req, res)=>
{
   const {error}=  validationSchema.validate(req.body);
   if(error) 
   {
    res.status(400).json({success:false, message:error.details[0].message});

   }
   //check if email exists
const emailExist  = await Subscriber.findOne({email:req.body.email});
if(emailExist)
{
    res.status(400).json({success:false, message:'This Email is Already Subscribed'}); 
}

    const subscriber = new Subscriber({
        fullname:req.body.fullname,
        email:req.body.email

    });
    try
    {
        subscriber.subscribed = true
       const saveSubscriber = await subscriber.save();
    
       res.status(201).json({success:true, message:'You Have Succefully subcribed'})
    }
    catch(error)
    {

    }
 
}
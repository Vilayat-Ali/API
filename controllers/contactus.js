const contactUs = require('../models/contactus.js');
const joi = require('@hapi/joi');

const {validationContactusSchema} = require('./validations.js');

exports.contactUsController = async(req,res)=>
{
    const {error}=  validationContactusSchema.validate(req.body);
   if(error) 
   {
    res.status(400).json({success:false, message:error.details[0].message});

   }

 const user = new contactUs (
     {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    
     }
 );
     
     try
     {
            const savedMessage  = await user.save();
            if(savedMessage)
            {
                res.status(200).json({success:true, message:"Message has been succefully sent"});
            }
     }
     catch(error)
     {

        res.status(400).json({success:false, message:`${error.message}`})
     }


}
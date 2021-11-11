const joi = require('@hapi/joi');


exports.validationSubcribeSchema = joi.object({
    fullname:joi.string().required().max(255),
    email:joi.string().required().email().max(255)
});


exports.validationContactusSchema = joi.object({

    firstName:joi.string().required().max(255),
    lastName:joi.string().required().max(255),
    email:joi.string().required().email().max(255),
    subject:joi.string().required(),
    message:joi.string().required().max(400)


});
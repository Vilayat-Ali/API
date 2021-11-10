const joi = require('@hapi/joi');


exports.validationSchema = joi.object({
    fullname:joi.string().required().max(255),
    email:joi.string().required().email().max(255)
});



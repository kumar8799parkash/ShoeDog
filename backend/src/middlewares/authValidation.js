import joi from 'joi';

export const signupValidation = async(req , res , next)=>{
    const schema = joi.object({
        name : joi.string().min(3).max(100).required(),
        email : joi.string().email().required(),
        password : joi.string().min(4).max(100).required()
    })

    const {error} = schema.validate(req.body);
    if(error){
        res.status(400).json({message : "Bad request!" , error});
    }
    next();
}
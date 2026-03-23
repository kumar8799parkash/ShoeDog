import User from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const signup = async(req, res) => {
    try {
        const { name, email, password } = req.body;

        const isExisting = await User.findOne({ email });

        if (isExisting) {
            return res.status(400).json({ message: "User already exists!! you can login directly" });  // if we do not write return then the execution continues even after the response is sended
        }

        const hashedPassword = await bcrypt.hash(password , 10);
        const newUser = new User({ name, email, password:hashedPassword });
        await newUser.save();

        return res.status(200).json({message : "User saved successfully, redirecting you to login page!"});

    }catch(err){
        return res.status(400).json({message : "There is some error during signup in backend"});
    }
}


export const login = async(req , res)=>{
    try{
        const {email , password} = req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(400).json({message : "User do not exists! Login first"});
        }

        const isPasswordEqual = await bcrypt.compare(password , existingUser.password);
        if(!isPasswordEqual){
            return res.status(400).json({message : "Invalid credentials /Invalid password!!"});
        }

        const jwtToken = jwt.sign(
            {userId : existingUser._id , userEmail : existingUser.email},
            process.env.JWT_SECRET,
            {expiresIn : '24h'}
        )

        return res.status(200).json({message : "Login successful! redirecting you to home page" , jwt : jwtToken});

    }catch(err){
        return res.status(400).json({message : "some error while login in backend",err});
    }
}


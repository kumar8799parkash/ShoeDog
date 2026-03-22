import User from '../models/UserModel.js'
export const signup = async(req, res) => {
    try {
        const { name, email, password } = req.body;

        const isExisting = await User.findOne({ email });

        if (isExisting) {
            res.status(400).json({ message: "User already exists!!" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(200).json({message : "User saved successfully, now you can log in!"});

    }catch(err){
        res.status(400).json({message : "There is some error during signup in backend"});
    }
}
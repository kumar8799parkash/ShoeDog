export const ensureAuthenticated = (req , res , next)=>{
    const authHeader = req.headers.Authorization;
    if(!authHeader){
        return res.status(400).json({message : "Authorization header is not present!!"})
    }
    const jwtToken = authorizationHeader.split(" ")
}
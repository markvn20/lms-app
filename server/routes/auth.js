import  express  from "express";

const router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username +' '+ process.env.USERNAME)
    if(username === process.env.USERNAME && password === process.env.PASSWORD) {
        const token = generateToken(username)
        res.cookie('token', token, {
            maxAge: 3600000000, // time until expiration
            secure: false, // set to true if you're using https
            httpOnly: true,
        });
        res.status(200).json({
            access: true
        })
        
        console.log(process.env.SECRET)
    } else {
        res.status(401).json({
            access: false
        })
    }
    
})
export default router
import jwt from "jsonwebtoken";

const generateTokenAndSetCookie =(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'1d'
    });

    res.cookie("jwt",token,{
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: false
    })
};

export default generateTokenAndSetCookie; 
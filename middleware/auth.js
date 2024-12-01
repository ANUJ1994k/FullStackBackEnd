const jwt = require("jsonwebtoken");
const blacklist = require("../blacklist");
const { json } = require("express");

const auth = (req, res, next) => {
    try {
        const token = req.headers(["authorization"].split(" "))[1];

        // Blacklist check for logged out users

        if (blacklist.includes(token)) {
            return res.status(401).json({ message: "Invalid credentials ,please login first!" })
        }

        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (err) {
                res.status(401).send("Invalid Credentials,Please Login first")
            } else {
                req.role = decoded.role;
                req.userId = decoded._Id;
                next()
            }
        })

    } catch (err) {
        res.status(401).json({message:"Invalid credential, Login First!"})
    }
}

module.exports=auth;
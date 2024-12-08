const jwt = require("jsonwebtoken");
const blacklist = require("../blacklist");

const auth = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).send("Authorization header is missing or invalid");
        }
        
        const token = authHeader.split(" ")[1];
        
        // Blacklist check for logged out users
        if (blacklist.includes(token)) {
            return res.status(401).send("Invalid token. Please login first!");
        }
        
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                console.error("Token verification error:", err);
                return res.status(401).send("Invalid token. Please login first!");
            }
            req.role = decoded.role;
            req.userId = decoded._id;
            next();
        });
    } catch (err) {
        console.error("Authentication error:", err);
        res.status(401).send("Invalid token. Please login first!");
    }
};

module.exports = auth;

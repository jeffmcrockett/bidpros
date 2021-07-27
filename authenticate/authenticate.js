// const jwt = require('jsonwebtoken');
// // used to sign in and verify jwt

// const jwtSecret = process.env.JWT_SECRET

// isAdmin = (req, res, next) => {
//     // if (req.isAdmin) {

//     // } else {
//     //     res.status(401).send("Unauthorization");
//     // }
// }

// checkJwt = (req, res, next) => {
//     console.log("Processing JWT Authentication Check");
    
//     // read the token from the header
//     let token;
//     if (req.headers.authorization) {
//         let bearer = req.headers.authorization.split(" ");
//         token = bearer[1];
//     }   else {
//         token = null;
//     }

//     // if the token is valid, there's nothing to check
//     if (!token) {
//         return res.status(401).send("Unauthorized");
//     }

//     // verify the token
//     jwt.verify(token, jwtSecret, (err, decoded) => {
//         // if we get an error message, then the token is not valid
//         if (err) {
//             console.log("Could not verify jwt", err)
//             return res.status(401).send("Unauthorized");
//         }
//     })
    
//     // if the token is valid, store the username from the token in the request so that it's available following the call
//     console.log(decoded);
//     req.username = decoded.username;
//     req.isAdmin = decoded.role == 'admin'

//     // call the next middleware function in the chain
//     next();
// }

// module.exports = { isAdmin, checkJwt }; 
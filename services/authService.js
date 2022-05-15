let jwt = require("jsonwebtoken");
const { SECRET_KEY } = require('../resources/constants')


exports.createToken = function(user) {
    let payload = {
        user_id: user.user_id,
        name: user.name
    };
    let token = jwt.sign(
        {payload: payload},
        SECRET_KEY,
        {expiresIn: 60*60}
    );
    return token;
};

exports.authenticate = function(req, res, next) {
    jwt.verify(req.headers.authorization, SECRET_KEY, function(err, decoded) {
        if(err) return next({
            status: 401,
            message: "Authorisation token is invalid or expired!"
        })
        res.locals.user_info = decoded.payload;
        next();
    });
};

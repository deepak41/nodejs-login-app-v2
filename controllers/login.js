const { User } = require('../models/users');
const authService = require("../services/authService");

const login = (req, res, next) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if(!user) return next({
            status: 401,
            message: "Invalid Credentials!"
        });
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!err && isMatch) {
                let token = authService.createToken(user);
                res.json({
                    error: "false",
                    message: "Login is successful!",
                    data: {token: token}
                });
            }
            else {
                next({
                    status: 401,
                    message: "Invalid Credentials!"
                })
            }
        });
    })
}


module.exports = {
    login: login
}

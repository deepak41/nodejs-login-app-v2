const { User } = require('../models/users');

const getAllUsers = (req,res, next) => {
    User.find({}, (err, docs) => {
        if(err) return next(err);
        return res.json({
            error: "false",
            message: "Users found successfully!",
            data: docs
        })
    });
}

const createUser = (req, res, next) => {
    let userDetails = req.body;
    let newUser = new User(userDetails);
    newUser.save((err, user) => {
        if(err) {
            // forward to express error handling middleware
            return next(err);
        }
        res.status(201).json(user);
    })
}


module.exports = {
    getAllUsers: getAllUsers,
    createUser: createUser
}
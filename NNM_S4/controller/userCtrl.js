const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        // Create new User
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        // User already exist
        throw new Error("User already exist");
    }
});

const getUsers = asyncHandler(async (req, res) => {
    const findUser = await User.find();

    if (findUser) {
        // Create new User
        res.json(findUser);
    } else {
        // User already exist
        throw new Error("User already exist");
    }
});

module.exports = {
    createUser,
    getUsers
}

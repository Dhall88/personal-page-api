const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.status(200).send('get all data');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const createUser = await User.create({ ...req.body });
        res.status(200).send('User created');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put("/", async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(req.body.userId) },
            { ...req.body },
            { returnDocument: 'after' }
        );
        res.status(200).send('User updated');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/", async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete(
            { _id: mongoose.Types.ObjectId(req.body.userId) }
        );
        res.status(200).send('User deleted');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;

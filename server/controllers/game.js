const mongoose = require("mongoose");
const Game = require("../models/game");

const saveGameController = async (req, res) => {

    try{
        let {wrongCount, rightCount, user} = req.body;

        if (!req.body.user){
            res.status(202).json({"success": "anonymous game"});
            return;
        }

        game = new Game({wrongCount, rightCount, user});
        await game.save();
        res.status(201).json({"correct": game.rightCount, "wrong": game.wrongCount});
    }
    catch (e){
        res.status(400).send({'error': 'invalid request'})
    }

}


module.exports = {
    saveGameController,
}
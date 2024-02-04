const mongoose = require('mongoose')
const Chatroom = mongoose.model("Chatroom");

exports.createChatroom = async(req, res) => {
    const {name} = req.body;

    
    const chatroom = new Chatroom({name});

    await chatroom.save()

    res.json({
        message: "Chatroom created!!"
    })
}
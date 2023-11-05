const messageModel = require("../Models/messageModel")


const createMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body

  const message = new messageModel({ //create new doc using model
    chatId, senderId, text
  })

  try { //save this message in db
    const response = await message.save()

    res.status(200).json(response); //send this data to client
  } catch(error) {
    console.log(error)
    res.status(500).json(error)
  }
}
const getMessages = async(req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await messageModel.find({chatId}) // get all messages for certain chat

    res.status(200).json(messages); 
  } catch(error){
    console.log(error)
    res.status(500).json(error)
  }
}
module.exports = { createMessage, getMessages }
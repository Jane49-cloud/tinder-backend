const Card = require('../model/cards')

const createCard = async (req,res)=>{
   try {
    const card = await Card.create(req.body)
    res.json(card)
    console.log(card)
    
   } catch (error) {
    console.log(error)
   }
}
module.exports ={
    createCard
}
const mongoose= require('mongoose');

const cardSchema = new mongoose.Schema({
    name: { type: String },
    image: { type: String },
   
  });
module.exports= mongoose.model( "Card", cardSchema)
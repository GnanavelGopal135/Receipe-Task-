import mongoose from "mongoose";

const receipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  }
});


const Receipe = mongoose.model("Receipe", receipeSchema);

export default Receipe;
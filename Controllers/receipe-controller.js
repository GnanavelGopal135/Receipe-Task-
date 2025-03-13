import Receipe from "../Model/receipe-model.js";

// Create Receipe
export const createReceipe = async (req, res) => {
  try {
    const newReceipe = new Receipe(req.body);
    await newReceipe.save();
    res
      .status(201)
      .json({ message: "Receipe created successfully", newReceipe });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Receipes
export const getAllReceipe = async (req, res) => {
  try {
    const receipes = await Receipe.find();
    res.status(200).json({ message: "All Receipes", receipes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Receipe by ID
export const getReceipeById = async (req, res) => {
  try {
    const recId = req.params.id;
    const receipe = await Receipe.findById(recId);
    if (!receipe) {
      return res.status(404).json({ message: "Receipe not found" });
    }
    res.status(200).json({ message: "Receipe found", receipe });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Receipe
export const updateReceipeByID = async (req, res) => {
  try {
    const {recId} = req.params;
    const { title, ingredients, instructions, time, difficulty } = req.body;
    const receipe = await Receipe.updateOne(
      { id: recId },
      { title, ingredients, instructions, time, difficulty }
    );

    if (receipe.matchedCount === 0) {
      return res.status(404).json({ message: "Receipe not found" });
    }
    const updateReceipe = await Receipe.find(recId);
    res
      .status(200)
      .json({ message: "Receipe updated successfully", updateReceipe });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
// Delete Receipe
export const deleteReceipeById=async(req,res)=>{
    try{
        const recId=req.params.id;
        const receipe=await Receipe.findByIdAndDelete(recId);
        if(!receipe){
            return res.status(404).json({message:"Receipe not found"});
        }
        res.status(200).json({message:"Receipe deleted successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

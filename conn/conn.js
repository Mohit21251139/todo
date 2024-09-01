const mongoose = require("mongoose");


const conn = async(req,res) =>{
   try{
     await mongoose.connect("mongodb+srv://msainimrt007:msa123007@cluster0.pkcmb.mongodb.net/").then(()=>{
        console.log("connected");
     });
   }catch(error){
    res.status(400).json({
        message:"Not Connected",
    });
   }
};

conn();
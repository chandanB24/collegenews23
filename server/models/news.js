const mongoose =  require('mongoose');


const newsSchema = new mongoose.Schema({
    heading:{type:String,required:false},
    body:{type:String,required:true},
    url:{type:String,required:false},
    imageurl:{type:String,required:false},
    pdfurl:{type:String,required:false},
},{timestamps:true})



module.exports = mongoose.model('news',newsSchema);
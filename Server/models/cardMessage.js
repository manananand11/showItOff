import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({

    title:String ,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    }

});

const CardMesage = mongoose.model('CardMessage',cardSchema);
export default CardMesage;
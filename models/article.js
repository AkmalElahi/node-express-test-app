import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    titl:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

export const Article = mongoose.model('Article', articleSchema);
import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
title: {
    type: String,
    required: true
},
content : {
    type: String,
    required: true
},
image :  {
    type: String,
    required: true
},
  userId: {
    type: String,
    required: true,
  },
}, {
    timestamps: true
})

export const Post =  mongoose.model("Post",PostSchema)
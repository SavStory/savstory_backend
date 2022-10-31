import { Schema } from "mongoose";

export const salvationSttorySchema = new Schema({
    author: String, // string to the user id
    body: String,
    likes: Number,
    date_of_salvation: Date,
    venue: String,
    comments: [{body: String, date: Date}]
})


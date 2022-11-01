import { Schema } from "mongoose";

export const salvationSttorySchema = new Schema({
    author: String, // string to the user id
    body: String,
    likes: Number,
    date_of_salvation: Date,
    venue: String,
    comments: [{body: String, date: Date}]
}, {
    statics: {
        getSalvationStory(userID) {
            // TODO - using the user ID, get the salvation story of the user
        }, 

        getSalvationStoriesField () {
            // returns an array of the salvation story
        }
    }
})


import { Schema } from 'mongoose'

export interface ISalvationStory {
  author: string
  body: string
  date_of_salvation: Date
  venue: string
}

export const salvationSttorySchema = new Schema<ISalvationStory>(
  {
    author: String, // string to the user id
    body: String,
    date_of_salvation: Date,
    venue: String
  },
  {
    statics: {
      getSalvationStory() {
        // TODO - using the user ID, get the salvation story of the user
      },

      getSalvationStoriesField() {
        // returns an array of the salvation story
      }
    }
  }
)

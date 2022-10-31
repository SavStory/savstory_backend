import {model} from "mongoose"
import {salvationSttorySchema} from "./salvation_story"
import {userSchema} from "./users"

export const SalvationStory = model("salvation_story", salvationSttorySchema)
export const User = model("user", userSchema)


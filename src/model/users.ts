import mongoose, { Schema } from 'mongoose'

interface LoginUserInfo {
  username: string
  password: string
}

interface RegisterUserInfo extends LoginUserInfo {}

export const userSchema = new Schema(
  {
    password: String,
    profile_img_url: String,
    salvation_story_id: mongoose.Types.ObjectId
  },
  {
    statics: {
      registerUser: (userInfo: RegisterUserInfo) => {
        // TODO - validate that the username is not taken
        // TODO - validate that the password is
        // - length - greater than 5
        // - does not contain some crazy number
      },
      loginUser: (userInfo: LoginUserInfo) => {
        // TODO - validate the input field
        // login the user and store the authentication in the folder
      }
    }
  }
)

import { AuthenticationError, UserInputError } from "apollo-server"
import bcryptjs from "bcryptjs"
import checkAuth from "../../auth/check-auth.js"

import generateToken from "../../auth/generate-token.js"
import User from "../../models/user-model.js"
import validators from "../../validators/index.js"

export default {
  Query: {
    users: async () => {
      try {
        return await User.find()
      } catch (error) {
        throw new Error("no user found")
      }
    }
  },
  Mutation: {
  // register user resolver
    registerUser: async (_, { registerUserInput: { username, email, password, confirmPassword } }) => {
      const existingUsername = await User.findOne({ username })
  
      if (existingUsername) {
        throw new UserInputError("Sorry, this username is taken")
      }
  
      if (!validators({ type: "EMAIL", value: email })) {
        throw new UserInputError("Invalid email address, e.g.: example@example.com")
      }
  
      if (!validators({ type: "TRIM", value: username })) {
        throw new UserInputError("username should not be empty")
      }
  
      if (!validators({ type: "MIN_LENGTH", value: password, length: 6 })) {
        throw new UserInputError("Password should be grater than 6")
      }
  
      if (!validators({ type: "IS_MATCH", value: password, matchedValue: confirmPassword })) {
        throw new UserInputError("Password and confirm password is not matched")
      }
  
      password = await bcryptjs.hash(password, 11)
  
      const newUser = await new User({
        username,
        email,
        password,
        createdAt: new Date()      
      })
  
      const createdUser = await newUser.save()
  
      const token = generateToken(createdUser)
  
      return {
        ...createdUser._doc,
        id: createdUser.id,
        token
      }
    },
  // login user resolver
    loginUser: async (_, { loginUserInput: { username, password } }) => {
      if (!validators({ type: "TRIM", value: username })) {
        throw new UserInputError("username should not be empty")
      }

      if (!validators({ type: "MIN_LENGTH", value: password, length: 6,})) {
        throw new UserInputError("Password should be grater than 6")
      }

      const user = await User.findOne({ username })

      if (user) {
        const checkPassword = await bcryptjs.compare(password, user.password)
        if (checkPassword) {
         const token = await generateToken(user)
         
         return {
           ...user._doc,
           id: user._id,
           token
         }
        } else {
          throw new UserInputError("Invalid password")
        }
      } else {
        throw new UserInputError("user not found")
      }
    },

    deleteAccount: async (_, { deleteAccountInput: { username } }, context) => {
      const currentUser = checkAuth(context)

      const user = await User.findOne({ username })

      if (currentUser.username === user.username) {
        await user.delete()
        return "account deleted successfuly"
      } else {
        throw new AuthenticationError("you cannot delete this account")
      }
    }
  }
}
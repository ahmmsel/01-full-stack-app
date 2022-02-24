import userResolvers from "./user-resolvers.js";
import questionResolver from "./question-resolvers.js";
import answerResolvers from "./answer-resolvers.js";

export default {
  Query: {
    ...userResolvers.Query,
    ...questionResolver.Query,
    ...answerResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...questionResolver.Mutation,
    ...answerResolvers.Mutation,
  }
}
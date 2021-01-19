const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
  }

  type Query {
    allUsers: [User!]!
    userById(id: ID!): User!
    allCategories: [Category!]!
    categoryById(id: ID!): Category!
    allQuestions: [Question!]!
    questionById(id: ID!): Question!
    allScores: [Score!]!
    scoresById(id: ID!): Score!
  }

  type Mutation {
    addUser(input: userInput!): User!
    addQuestion(input: questionInput): Question!
    addScore(input: scoreInput): Score!
    addCategory(input: categoryInput!): Category!
  }

  type User {
    id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
    username: String!
    password: String!
    firstName: String!
    lastName: String!
    accuracy: Float
    gamesPlayed: Int 
  }

  input userInput {
    email: String!
    createdAt: String!
    updatedAt: String!
    username: String!
    password: String!
    firstName: String!
    lastName: String! 
  }

  type Category {
    id: ID! 
    title: String!
    description: String!
    type: String! 
    popularity: Float
    difficulty: Float! 
  }

  input categoryInput {
    title: String!
    description: String!
    type: String! 
    difficulty: Float!
  }

  type Question {
    id: ID!
    categoryId: ID!
    question: String!
    answerMinimum: Int!
    answerMaximum: Int!
    popularity: Float 
    difficulty: Float! 
  }

  type questionInput {
    categoryId: ID!
    question: String!
    answerMinimum: Int!
    answerMaximum: Int!
    difficulty: Float! 
  }

  type Score {
    id: ID!
    userId: ID!
    categoryId: ID!
    score: Float!
    timeScored: String!
  }

  input scoreInput {
    userId: ID!
    categoryId: ID!
    score: Float!
    timeScored: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
  }
`
// need to make category type enum, not String

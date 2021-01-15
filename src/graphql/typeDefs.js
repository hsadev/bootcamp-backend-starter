const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!

    addUser(input: UserInput!):User!

    addDiet(input: DietInput!):Diet!
    updateDiet(input: DietInput!):Diet!

    addHealth(input: HealthInput!):Health!
    updateHealth(input: HealthInput!):Health!

    addTriedRecipe(input: TriedRecipeInput!):TriedRecipe!

    addBookmark(input: BookmarkInput!): Bookmark!
    delBookmark(input: BookmarkInput!): Bookmark!

  }

  type Query {
    welcome: String!

    allUsers: [User!]!
    userById(id:ID!):User!

    allDiets: [Diet!]!
    dietById(id:ID!):Diet!

    allHealth: [Health!]!
    healthById(id:ID!):Health!

    allTriedRecipes: [TriedRecipe!]!
    triedRecipeById(id:ID!):TriedRecipe

    allBookmarks: [Bookmark!]!
    bookmarkById(id:ID!):Bookmark!

  }

  type User {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!    
  }

  type Diet {
    id: ID!
    user: User!
    restriction: String!
  }

  input DietInput {
    user: UserInput!
    restriction: String!    
  }

  type Health {
    id: ID!
    user: User!
    restriction: String!
  }

  input HealthInput {
    user: UserInput!
    restriction: String!    
  }

  type TriedRecipe {
    id: ID!
    user: User!
    link: String!
  }

  input TriedRecipeInput {
    user: UserInput!
    link: String!
  }

  type Bookmark {
    id: ID!
    user: User!
    link: String!
  }

  input BookmarkInput {
    user: UserInput!
    link: String!    
  }

  type MealTracker {
    id: ID!
    user: User!
    tried: TriedRecipe!
    date: Date!
    meal: String!
  }

  input MealTrackerInput {
    user: UserInput!
    tried: TriedRecipeInput!
    date: Date!
    meal: String!    
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  scalar Date
`

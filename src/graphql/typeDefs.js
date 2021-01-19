const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!

    addDiet(input: DietInput!):Diet!

    addHealth(input: HealthInput!):Health!

    addTriedRecipe(input: TriedRecipeInput!):TriedRecipe!
    delTriedRecipe(input: TriedRecipeInput!):[TriedRecipe!]!

    addBookmark(input: BookmarkInput!): Bookmark!
    delBookmark(input: BookmarkInput!): [Bookmark!]!

    addMealTracker(input: MealTrackerInput!): MealTracker!
  }

  type Query {
    allUsers: [User!]!
    dietById(id:ID!):[Diet!]! 
    healthById(id:ID!):[Health!]!
    triedRecipeById(id:ID!):[TriedRecipe]!
    bookmarkById(id:ID!):[Bookmark!]!
    mealTrackerById(id: ID!):[MealTracker!]!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    id: ID!
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

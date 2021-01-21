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
    
  }

  type Query {
    allUsers: [User!]!
    userViewer: User!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    triedRecipes: [TriedRecipe!]!
    bookmarks: [Bookmark!]!
    diets: [Diet!]!
    healths: [Health!]!
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
    apiID: String!
    user: User!
    link: String!
  }

  input TriedRecipeInput {
    apiID: String!
    user: UserInput!
    link: String!
  }

  type Bookmark {
    id: ID!
    apiID: String!
    user: User!
    link: String!
  }

  input BookmarkInput {
    apiID: String!
    link: String!    
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

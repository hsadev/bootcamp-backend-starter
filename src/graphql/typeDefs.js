const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    # login(email: String!, password: String!): AuthReturn!
    # register(input: RegisterInput!): AuthReturn!
  }

  type Query {
    # welcome: String!
  }

  # user
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    birthday: Date!
    email: String!
    username:
    password: String!
    phoneNumber: String!
    age: Int!
    genreDescription: [String!]
    topSongs: [Song!]!
    

    # createdAt: String!
    # updatedAt: String!
  }

  # user
  type Song{

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

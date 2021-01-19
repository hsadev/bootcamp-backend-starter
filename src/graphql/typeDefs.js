const { gql } = require('apollo-server-express')
const typeDefs = require('../../../bootcamp-backend-demo/src/graphql/typeDefs')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!

  }

  type Query {
    welcome: String!
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  type Course {
    id: ID!
    name: String!
    professor: String
    monday: Boolean!
    tuesday: Boolean!
    wednesday: Boolean!
    thursday: Boolean!
    friday: Boolean!
    timeStart: String
    timeEnd: String
    hoursPerWeek: Int
    description: String
    enrolled: Boolean!
    user: User!
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

module.exports = typeDefs

const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn
    register(input: RegisterInput!): AuthReturn!
    addCourse(course: addCourseInput!): Course
    
  }
  type Query {
    userCourses(userID: ID!): [Course!]
    userById(userID: ID!): User
    userByEmail(email: String!): User
    courseById(courseID: ID!): Course

  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    createdAt: String!
    updatedAt: String!
    courses: [Course]
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

  input addCourseInput {
    title: String!
    professor: String!
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
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
  }
`

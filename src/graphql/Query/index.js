const merge = require('lodash.merge')
const Users = require('./Users')
const Courses = require('./Courses')

const resolvers = [Courses, Users]

module.exports = merge(...resolvers)

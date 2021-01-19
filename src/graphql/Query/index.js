const merge = require('lodash.merge')
const User = require('./User')
const Category = require('./Category')
const Score = require('./Score')
const Question = require('./Question')

const resolvers = [User, Category, Score, Question]

module.exports = merge(...resolvers)

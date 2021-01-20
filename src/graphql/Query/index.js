const merge = require('lodash.merge')
const User = require('./User')
const Diet = require('./Diet')
const Health = require('./Health')
const TriedRecipe = require('./TriedRecipe')
const Bookmark = require('./Bookmark')
// const MealTracker = require('./MealTracker')

const resolvers = [User, Diet, Health, TriedRecipe, Bookmark]

module.exports = merge(...resolvers)

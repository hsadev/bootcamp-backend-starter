const merge = require('lodash.merge')
const Auth = require('./Auth')
const Diet = require('./Diet')
const Health = require('./Health')
const TriedRecipe = require('./TriedRecipe')
const Bookmark = require('./Bookmark')
const MealTracker = require('./MealTracker')

const resolvers = [Auth, Diet, Health, TriedRecipe,Bookmark, MealTracker]

module.exports = merge(...resolvers)

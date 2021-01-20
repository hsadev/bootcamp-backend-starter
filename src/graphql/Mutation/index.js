const merge = require('lodash.merge')
const Auth = require('./Auth')
const Diet = require('./Diet')
const Health = require('./Health')
const TriedRecipe = require('./TriedRecipe')
const Bookmark = require('./Bookmark')

const resolvers = [Auth, Diet, Health, TriedRecipe,Bookmark]

module.exports = merge(...resolvers)

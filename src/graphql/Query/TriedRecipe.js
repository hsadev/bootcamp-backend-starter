// const TriedRecipe = require('../../models/TriedRecipes')
// const User = require('../../models/User')

// const triedRecipeById = async(obj, {id}, context) => {
//     try {
//         const triedRecipes = await TriedRecipe.query().where({userID:id})
//         return triedRecipes
//     } catch (err) {
//         console.log(err)
//     }
// }

// const user = async({userID}, params, context) => {
//     const u = await User.query().findById(userID)
//     return u
// }

// const resolver = {
//     Query: {
//         triedRecipeById
//     },
//     TriedRecipe: {
//         user
//     }
// }

// module.exports = resolver
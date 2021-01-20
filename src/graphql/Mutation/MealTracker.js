// const MealTracker = require('../../models/MealTracker')

// const TriedRecipe = require('../../models/TriedRecipes')

// const addMealTracker = async(obj, {input}, context) => {
//     try {
//         const tried = await TriedRecipe.query().findOne({
//             userID: input.tried.user.id,
//             link: input.tried.link
//         })

//         if (!!tried){
//             console.log("TEST")
//             console.log(input.user.id)
//             console.log(tried.id)
//             console.log(input.date)
//             console.log(input.meal)
//             const insert = await MealTracker.query().insert({
//                 triedID: tried.id,
//                 date: input.date,
//                 meal: input.meal
//             }).returning("*")
//             return insert
//         } else {
//             throw new Error("Recipe is not marked as tried")
//         }


//     } catch (err) {
//         console.log(err)
//     }
// }

// const resolver = {
//     Mutation: {
//         addMealTracker
//     }
// }

// module.exports = resolver
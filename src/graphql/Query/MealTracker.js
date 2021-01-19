const MealTracker = require('../../models/MealTracker')
const TriedRecipe = require('../../models/TriedRecipe')

const mealTrackerById = async(obj, {id}, context) => {
    try {
        console.log("TEST")
        const tried = await TriedRecipe.query().where({userID:id})

        const mealtracker = []

        for (i=0; i < tried.length; i++){
            const t = await MealTracker.query().where({triedID: tried[i].id})
            mealtracker.push(...t)
        }

        return mealtracker

    } catch (err) {
        console.log(err)
    }
}

const tried = async({triedID}, params, context) => {
    const t = await TriedRecipe.query().findById(triedID)
    return t
}

const resolver = {
    Query: {
        mealTrackerById
    },
    MealTracker: {
        tried
    }
}

module.exports = resolver
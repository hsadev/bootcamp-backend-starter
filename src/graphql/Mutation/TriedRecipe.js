const TriedRecipe = require('../../models/TriedRecipe')
const MealTracker = require('../../models/MealTracker')

const addTriedRecipe = async(obj, {input}, context) => {
    try {
        const insert = await TriedRecipe.query().insert({
            userID: input.user.id,
            link: input.link
        }).returning("*")
        return insert
    } catch (err) {
        console.log(err)
    }
}

const delTriedRecipe = async(obj, {input}, context) => {
    try {
        const t = await TriedRecipe.query().findOne({
            userID: input.user.id,
            link: input.link
        }).returning("*")

        const delMT = await MealTracker.query().delete().where({
            triedID: t.id
        })

        const delTR = await TriedRecipe.query().delete().where({
            id: t.id
        }).returning("*")

        return delTR
        
    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Mutation: {
        addTriedRecipe,
        delTriedRecipe
    }
}

module.exports = resolver
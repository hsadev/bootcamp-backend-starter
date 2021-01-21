const TriedRecipe = require('../../models/TriedRecipes')

const addTriedRecipe = async(obj, {input}, {user: {id}}) => {
    try {
        const insert = await TriedRecipe.query().insert({
            userID: id,
            apiID: input.apiID,
            link: input.link
        }).returning("*")
        return insert
    } catch (err) {
        console.log(err)
    }
}

const delTriedRecipe = async(obj, {input}, {user: {id}}) => {
    try {
        const t = await TriedRecipe.query().findOne({
            userID: id,
            apiID: input.apiID,
            link: input.link
        }).returning("*")

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
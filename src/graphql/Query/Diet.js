const Diet = require('../../models/Diet')
const User = require('../../models/User')

const dietById = async(obj, {id}, context) => {
    try {
        const diets = await Diet.query().where({userID:id})
        return diets
    } catch (err) {
        console.log(err)
    }
}

const user = async({userID}, params, context) => {
    const u = await User.query().findById(userID)
    return u
}

const resolver = {
    Query: {
        dietById
    },
    Diet: {
        user
    }
}

module.exports = resolver

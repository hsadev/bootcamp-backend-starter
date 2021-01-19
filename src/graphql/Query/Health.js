const Health = require('../../models/Health')
const User = require('../../models/User')

const healthById = async(obj, {id}, context) => {
    try {
        const health = await Health.query().where({userID:id})
        return health
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
        healthById
    },
    Health: {
        user
    }
}

module.exports = resolver
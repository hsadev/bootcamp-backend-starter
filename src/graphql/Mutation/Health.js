const Health = require('../../models/Health')

const addHealth = async(obj, {input}, {user: {id}}) => {
    try {
        const insert = await Health.query().insert({
            userID: id,
            restriction: input.restriction
        }).returning("*")
        return insert
    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Mutation: {
        addHealth
    }
}

module.exports = resolver
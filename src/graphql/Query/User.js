const User = require('../../models/User')

const allUsers = async() => {
    try {
        const users = await User.query()
        return users
    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Query: {
        allUsers,
    }
}

module.exports = resolver
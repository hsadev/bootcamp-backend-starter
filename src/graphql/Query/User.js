const User = require('../../models/User')
const TriedRecipe = require('../../models/TriedRecipes')
const Bookmark = require('../../models/Bookmarks')
const Diet = require('../../models/Diet')
const Health = require('../../models/Health')

const allUsers = async() => {
    try {
        const users = await User.query()
        return users
    } catch (err) {
        throw new Error("ERROR")
    }
}

const userViewer = async(obj, params, {user: {id}}) => {

    try {
        const user = await User.query().findById(id)

        if (user){
            return user
        } else {
            throw new Error("invalid web token")
        }
        
    } catch (err) {
        console.log(err)
    }
}

const triedRecipes = async({id}, params, context) => {
    console.log(id)
    try {
        const tried = await TriedRecipe.query().where({userID: id})
        return tried
    } catch (err) {
        console.log(err)
    }
}

const bookmarks = async({id}, params, context) => {
    try {
        const b = Bookmark.query().where({userID: id})
        return b
    } catch (err) {
        console.log(err)
    }
}

const diets = async({id}, params, context) => {
    try {
        const d = Diet.query().where({userID: id})
        return d
    } catch (err) {
        console.log(err)
    }
}

const healths = async({id}, params, context) => {
    try {
        const h = Health.query().where({userID: id})
        return h
    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Query: {
        allUsers,
        userViewer
    },
    User: {
        triedRecipes,
        bookmarks,
        diets,
        healths
    }
}

module.exports = resolver
const Bookmark = require('../../models/Bookmarks')

const addBookmark = async(obj, {input}, {user: {id}}) => {
    try {
        const insert = await Bookmark.query().insert({
            userID: id,
            apiID: input.apiID,
            link: input.link
        }).returning("*")
        return insert
    } catch (err) {
        console.log(err)
    }
}

const delBookmark = async(obj, {input}, {user: {id}}) => {
    try {
        const del = await Bookmark.query().delete().where({
            userID: id,
            apiID: input.apiID,
            link: input.link
        }).returning("*")
        return del
    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Mutation: {
        addBookmark,
        delBookmark
    }
}

module.exports = resolver
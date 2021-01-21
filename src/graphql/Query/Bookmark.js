// const Bookmark = require('../../models/Bookmarks')
// const User = require('../../models/User')

// const bookmarkById = async(obj, {id}, context) => {
//     try {
//         const bookmarks = await Bookmark.query().where({userID:id})
//         return bookmarks
//     } catch (err) {
//         console.log(err)
//     }
// }

// const user = async({userID}, params, context) => {
//     const u = await User.query().findById(userID)
//     return u
// }

// const resolver = {
//     Query: {
//         bookmarkById
//     },
//     Bookmark: {
//         user
//     }
// }

// module.exports = resolver
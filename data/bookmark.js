const casual = require('casual')
const userData = require('./user')

casual.define('bookmark', userId => ({
    id: casual.uuid,
    userID: userId,
    link: casual.url
}))

const bookmarkData = []

for (let i = 0; i < 20; ++i) {
    const userId = casual.random_element(userData).id
    bookmarkData.push(casual.bookmark(userId))
}

module.exports = bookmarkData
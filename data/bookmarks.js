const casual = require('casual')
const userData = require('./users')

casual.define('bookmark', ({ userID }) => ({
  id: casual.uuid,
  apiID: casual.string,
  userID,
  link: casual.url,
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const bookmarkData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  bookmarkData.push(casual.bookmark({ userID }))
}

module.exports = bookmarkData

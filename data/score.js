const casual = require('casual')
const userData = require('./user')
const categoryData = require('./category')

casual.define('categoryScore', ({ id: myUserId }, { id: myCategoryId }) => ({
  id: casual.uuid,
  userId: myUserId,
  categoryId: myCategoryId,
  score: casual.integer(0, 1000),
}))

const scoreData = []

userData.forEach(category => {
  categoryData.forEach(user => {
    scoreData.push(casual.score(user, category))
  })
})

module.exports = scoreData

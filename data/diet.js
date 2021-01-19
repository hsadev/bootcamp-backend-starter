const casual = require('casual')
const userData = require('./users')

casual.define('diet', ({ userID }) => ({
  id: casual.uuid,
  userID,
  restriction: casual.random_element(['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium']),
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const dietData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  dietData.push(casual.diet({ userID }))
}

module.exports = dietData

const casual = require('casual')
const userData = require('./users')

casual.define('health', ({ userID }) => ({
  id: casual.uuid,
  userID,
  restriction: casual.random_element(['dairy-free', 'egg-free', 'gluten-free', 'kosher', 'peanut-free', 'pescatarian', 'shellfish-free', 'soy-free', 'tree-nut-free', 'vegan', 'vegetarian']),
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const healthData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  healthData.push(casual.health({ userID }))
}

module.exports = healthData

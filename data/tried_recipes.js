const casual = require('casual')
const userData = require('./users')

casual.define('tried_recipe', ({ userID }) => ({
  id: casual.uuid,
  userID,
  link: casual.url,
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const triedRecipeData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  triedRecipeData.push(casual.tried_recipe({ userID }))
}

module.exports = triedRecipeData

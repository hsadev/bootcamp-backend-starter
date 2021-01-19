const casual = require('casual')
const userData = require('./user')

casual.define('tried_recipe', userId => ({
    id: casual.uuid,
    userID: userId,
    link: casual.url
}))

const triedRecipeData = []

for (let i = 0; i < 20; ++i) {
    const userId = casual.random_element(userData).id
    triedRecipeData.push(casual.tried_recipe(userId))
}

module.exports = triedRecipeData
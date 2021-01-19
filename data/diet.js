const casual = require('casual')
const userData = require('./user')

const diets = ['Vegetarian','Paleo','High-Protein','Low-Fat','Low-Sugar','Balanced','Vegan','High-Fiber','Low-Carb','Low-Sodium','Alcohol-Free','Immunity']

casual.define('diet', userId => ({
    id: casual.uuid,
    userID: userId,
    restriction: diets[casual.integer(from=0,to=11)]
}))

const dietData = []

for (let i = 0; i < 20; ++i) {
    const userId = casual.random_element(userData).id
    dietData.push(casual.diet(userId))
}

module.exports = dietData
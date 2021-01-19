const casual = require('casual')
const userData = require('./user')

const healths = ['Gluten','Eggs','Wheat','Shellfish','Peanuts','Dairy','Soy','Fish','Tree Nuts']

casual.define('health', userId => ({
    id: casual.uuid,
    userID: userId,
    restriction: healths[casual.integer(from=0,to=8)]
}))

const healthData = []

for (let i = 0; i < 20; ++i) {
    const userId = casual.random_element(userData).id
    healthData.push(casual.health(userId))
}

module.exports = healthData
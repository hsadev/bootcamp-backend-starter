const casual = require('casual')
const triedRecipeData = require('./tried_recipe')

const meals = ['Breakfast','Lunch','Dinner','Snack']

casual.define('meal_tracker', tried => ({
    id: casual.uuid,
    triedID: tried,
    date: casual.date(format = 'YYYY-MM-DD'),
    meal: meals[casual.integer(from=0,to=3)]
}))

const mealTrackerData = []

for (let i = 0; i < 20; ++i) {
    const tried = casual.random_element(triedRecipeData).id
    mealTrackerData.push(casual.meal_tracker(tried))
}

module.exports = mealTrackerData

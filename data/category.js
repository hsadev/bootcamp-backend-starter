const casual = require('casual')

casual.define('category', () => ({
  id: casual.uuid,
  title: casual.title,
  description: casual.description,
  type: casual.random_element(['Geography', 'Miscellaneous']),
  popularity: casual.double(0, 100),
  difficulty: casual.double(0, 100),
}))


const categoryData = []

for (let i = 0; i < 10; ++i) {
  categoryData.push(casual.category)
}

module.exports = categoryData

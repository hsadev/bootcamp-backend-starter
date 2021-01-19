const casual = require('casual')
const categoryData = require('./category')

casual.define('question', ({ id: myCategoryId }) => ({
  id: casual.uuid,
  categoryId: myCategoryId,
  question: casual.text,
  answerMinimum: casual.integer(0, 100),
  answerMaximum: casual.integer(300, 600),
  popularity: casual.double(0, 100),
  difficulty: casual.double(0, 100),
}))


const questionData = []

for (let i = 0; i < 25; ++i) {
  questionData.push(casual.question(casual.random_element(categoryData)))
}

module.exports = questionData

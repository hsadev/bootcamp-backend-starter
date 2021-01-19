const Question = require('../../models/Question')

const allQuestions = async () => {
  try {
    const query = await Question.query()
    return query
  } catch (err) {
    throw new Error('Could not resolve users query.')
  }
}

const questionById = async (obj, { id }, context) => {
  try {
    const query = await Question.query().where('id', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve question by id query.')
  }
}

const resolver = {
  Query: {
    allQuestions,
    questionById,
  },
}

module.exports = resolver

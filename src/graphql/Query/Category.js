const Category = require('../../models/Category')
const Score = require('../../models/Score')
const Question = require('../../models/Question')

const allCategories = async () => {
  try {
    const query = await Category.query()
    return query
  } catch (err) {
    throw new Error('Could not resolve categories query.')
  }
}

const categoryById = async (obj, { id }, context) => {
  try {
    const query = await Category.query().where('id', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve user by id query.')
  }
}

const questions = async ({ id }, args, context) => {
  try {
    const query = await Question.query().where('categoryId', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve the category\'s question query.')
  }
}

const resolver = {
  Query: {
    allCategories,
    categoryById,
  },
  Category: {
    questions,
  },
}

module.exports = resolver

const User = require('../../models/User')
const Score = require('../../models/Score')

const allUsers = async () => {
  try {
    const query = await User.query()
    return query
  } catch (err) {
    throw new Error('Could not resolve users query.')
  }
}

const userById = async (obj, { id }, context) => {
  try {
    const query = await User.query().where('id', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve user by id query.')
  }
}

const scores = async ({ id }, args, context) => {
  try {
    const query = await Score.query().where('userId', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve the user\'s score query.')
  }
}

const resolver = {
  Query: {
    allUsers,
    userById,
  },
  User: {
    scores,
  },
}

module.exports = resolver

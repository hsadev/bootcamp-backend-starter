const Course = require('../../models/Course')

const courseById = async (obj, { id }) => {
  try {
    const course = await Course.query().findOne('id', id)
    return course
  } catch (err) {
    throw new Error('failed to get course')
  }
}

const resolver = {
  Query: {
    courseById,
  },
}

module.exports = resolver

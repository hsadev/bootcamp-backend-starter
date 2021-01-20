const Course = require('../../models/Course')

const courseById = async (obj, { id }) => {
  try {
    const course = await Course.query().where('id', id)
    return course
  } catch (err) {
    throw new Error('failed to get course')
  }
}

const userCourses = async (obj, { id }) => {
  try {
    const courses = await Course.query().where('userId', id)
    return courses
  } catch (err) {
    throw new Error('failed to get courses')
  }
}

const resolver = {
  Query: {
    courseById,
    userCourses,
  },
}

module.exports = resolver

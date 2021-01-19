const casual = require('casual')

// 'password' hashed with bcrypt scheme
const password = '$2a$10$rQEY9CNl4OC.UtiyRgKnZeW0KaWnEANMKAxfIpNDQCgiCybm3G1fy'

casual.define('user', () => ({
  id: casual.uuid,
  username: casual.username,
  password,
  firstName: casual.first_name,
  lastName: casual.last_name,
  email: casual.email,
  accuracy: casual.random,
  gamesPlayed: casual.integer(0, 100),
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData

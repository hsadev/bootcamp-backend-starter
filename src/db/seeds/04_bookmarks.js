const bookmarkData = require('../../../data/bookmarks')

exports.seed = knex => knex('bookmarks').del()
  .then(() => knex('bookmarks').insert(bookmarkData))

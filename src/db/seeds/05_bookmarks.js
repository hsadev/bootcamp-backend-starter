const bookmarkData = require('../../../data/bookmark.js')

exports.seed = knex => knex('bookmarks').del()
  .then(() => knex('bookmarks').insert(bookmarkData))

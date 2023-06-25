const express = require('express')
const router = express.Router({ mergeParams: true })
const {
  getNotes,
  addNote,
  updateNote,
  deleteNote } = require('../controller/note')
const authCheck = require('../middleware/authCheck')

router.route('/').get(authCheck, getNotes).post(authCheck, addNote)
router.route('/:noteId').delete(authCheck, deleteNote).put(authCheck, updateNote)

module.exports = router
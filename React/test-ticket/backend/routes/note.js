const express = require('express')
const router = express.Router({mergeParams: true})

const {getNotes, addNote} = require('../controller/note')
router.get('/', getNotes)
router.post('/', addNote)
module.exports = router

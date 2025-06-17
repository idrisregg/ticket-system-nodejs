const express = require('express')
const router = express.Router()
const {allTickets,createTicket,singleTicket,updateTicket,deleteTicket} = require('../controller/controller')

router.route('/').get(allTickets).post(createTicket)
router.route('/:id').get(singleTicket).put(updateTicket).delete(deleteTicket)

module.exports = router
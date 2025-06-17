const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketDate: {
    type: String,
    required: [true, 'You have to enter a date'],
    trim: true,
    maxLength: 20
  },
  clientName: {
    type: String,
    required: [true, 'You have to enter a client name'],
    trim: true,
    maxLength: 20
  },
  ticketMessage: {
    type: String,
    required: [true, 'You have to enter message content'], 
    trim: true,
    maxLength: 50
  }
});

module.exports = mongoose.model('Tickets', ticketSchema);

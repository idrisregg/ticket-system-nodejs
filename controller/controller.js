const tickets = require('../models/schema');
const mongoose = require('mongoose')

const allTickets = async (req, res) => {
  try {
    const ticket = await tickets.find({});
    res.status(200).json({ ticket });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

const createTicket = async (req, res) => {
  try {
    const task = await tickets.create(req.body); 
    res.status(201).json({ ticket: task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const singleTicket = async (req, res) => {
  const { id: ticketID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(ticketID)) {
    return res.status(404).type('html').send(require('../custom404')); 
  }

  try {
    const ticket = await tickets.findById(ticketID);
    if (!ticket) {
      return res.status(404).type('html').send(require('../custom404'));
    }

    res.status(200).json({ ticket });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};
const updateTicket = async (req, res) => {
  try {
    const { id: ticketID } = req.params;

    const ticket = await tickets.findByIdAndUpdate(ticketID, req.body, {
      new: true,
      runValidators: true
    });

    if (!ticket) {
      return res.status(404).json({ msg: `No task found with ID ${ticketID}` });
    }

    res.status(200).json({ ticket });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id: ticketID } = req.params;
    const ticket = await tickets.findByIdAndDelete(ticketID);

    if (!ticket) {
      return res.status(404).json({ msg: `No task found with ID ${ticketID}` });
    }

    res.status(200).json({ msg: 'Task deleted successfully', ticket });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

module.exports = {
  allTickets,
  createTicket,
  singleTicket,
  updateTicket,
  deleteTicket
};

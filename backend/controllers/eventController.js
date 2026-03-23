
const Event = require("../models/Event");

// CREATE AN EVENT

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET ALL EVENTS

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET SINGLE EVENTS

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE EVENT

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE EVENT

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);

    res.json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// REGISTER FOR EVENT

exports.registerForEvent = async (req, res) => {
  try {
    const { email } = req.body;

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    //check if already registered

    const alreadyRegistered = event.attendees.find(
      (attendee) => attendee.email === email,
    );

    if (alreadyRegistered) {
      return res.status(400).json({ message: "Already registed" });
    }

    //check capacity

    if (event.attendees.length >= event.capacity) {
      return res.status(400).json({ message: "Event is full" });
    }

    //Add attendee

    event.attendees.push({ email });

    await event.save();

    res.json({ message: "Registered successfully", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    date: {
      type: Date,
      required: true,
    },
    location: String,
    capacity: {
      type: Number,
      required: true,
    },
    attendees: [
      {
        email: String,
        registeredAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Event", eventSchema);

const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Get all appointments
router.get("/", async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

// Publish availability
router.post("/", async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.status(201).json(appointment);
});

// Book appointment
router.put("/:id/book", async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    {
      booked: true,
      patient: req.body.patient,
    },
    { new: true }
  );

  res.json(appointment);
});

// Cancel appointment
router.put("/:id/cancel", async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    {
      booked: false,
      patient: "",
    },
    { new: true }
  );

  res.json(appointment);
});

module.exports = router;

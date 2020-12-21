const db = require("../models");

module.exports = function (app) {
  app.post("/api/users/:deviceId", (req, res) => {
    db.User.create({ deviceId: req.params.deviceId })
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/medications", (req, res) => {
    db.Medication.create({
      name: req.body.name,
      instructions: req.body.instructions,
      deviceId: req.body.deviceId,
    })
      .then((medData) => {
        res.json(medData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/appointments", (req, res) => {
    db.Appointment.create({
      date: req.body.date,
      time: req.body.time,
      doctor: req.body.doctor,
      location: req.body.location,
      deviceId: req.body.deviceId,
    })
      .then((appointData) => {
        res.json(appointData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/users/:deviceId", (req, res) => {
    console.log(req.params);
    db.User.findOne({ deviceId: req.params.deviceId })
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/medications", (req, res) => {
    db.Medication.find({})
      .then((medData) => {
        res.json(medData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/appointments", (req, res) => {
    db.Appointment.find({})
      .then((appointData) => {
        res.json(appointData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/medications/:id", (req, res) => {
    db.Medication.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      instructions: req.body.instructions,
    })
      .then((medData) => {
        res.json(medData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/appointments/:id", (req, res) => {
    db.Appointment.findByIdAndUpdate(req.params.id, {
      date: req.body.date,
      time: req.body.time,
      doctor: req.body.doctor,
      location: req.body.location,
    })
      .then((appointData) => {
        res.json(appointData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.delete("/api/medications/:_id", (req, res) => {
    db.Medication.findOneAndDelete(req.params._id)
      .then((medData) => {
        res.json(medData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.delete("/api/appointments/:_id", (req, res) => {
    db.Appointment.findOneAndDelete(req.params._id)
      .then((appointData) => {
        res.json(appointData);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

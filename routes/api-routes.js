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
    db.User.findOne({ deviceId: req.body.deviceId })
      .then((userData) => {
        db.Medication.create({
          name: req.body.name,
          instructions: req.body.instructions,
          user: userData._id,
        }).then((medData) => {
          db.User.findByIdAndUpdate(
            { _id: userData._id },
            {
              $push: {
                medications: medData._id,
              },
            }
          ).then(() => {
            res.json(medData);
          });
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/appointments", (req, res) => {
    db.User.findOne({ deviceId: req.body.deviceId })
      .then((userData) => {
        db.Appointment.create({
          date: req.body.date,
          time: req.body.time,
          doctor: req.body.doctor,
          location: req.body.location,
          user: userData._id,
        }).then((appointData) => {
          db.User.findByIdAndUpdate(
            { _id: userData._id },
            {
              $push: {
                appointments: appointData._id,
              },
            }
          ).then(() => {
            res.json(appointData);
          });
        });
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
    db.User.findOne({ deviceId: req.body.deviceId })
      .then((userData) => {
        db.Medication.find({ user: userData._id }).then((medData) => {
          res.json(medData);
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/appointments", (req, res) => {
    db.User.findOne({ deviceId: req.body.deviceId })
      .then((userData) => {
        db.Appointment.find({ user: userData._id }).then((appointData) => {
          res.json(appointData);
        });
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

  app.delete("/api/medications/:id", (req, res) => {
    db.Medication.findByIdAndDelete(req.params.id)
      .then((medData) => {
        res.json(medData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.delete("/api/appointments/:id", (req, res) => {
    db.Appointment.findByIdAndDelete(req.params.id)
      .then((appointData) => {
        res.json(appointData);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

const EVENT = require('../lib/event-queries');
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const event = new EVENT(db);
  router.post("/create", (req, res) => {
    console.log(req.body);
    const queryObj = {
      ownerId: 1,
      startDate: req.body.from,
      endDate: req.body.to,
      closeSubmission: req.body.deadline,
      detail: req.body.description
    };
    event.newEvent(queryObj)
      .then(result => {
        return result;
      });
  });
  return router;
};

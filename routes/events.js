const EVENT = require('../lib/event-queries');
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const event = new EVENT(db);
  router.post("/create", (req, res) => {
    const { ownerId, startDate, endDate, closeSubmission, detail } = req.body;
    event.newEvent(ownerId, startDate, endDate, closeSubmission, detail)
      .then(result => {
        return result;
      })
      .catch(err => {
        res.status(500).send('Failed to create');
      });
  });
  return router;
};

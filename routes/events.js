const EVENT = require('../lib/event-queries');
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const e = new EVENT(db);
  router.get("/create", (req, res) => {
    e.events
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return router;
};

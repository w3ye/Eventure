const EVENT = require("../lib/event-queries");
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const event = new EVENT(db);
  router.post("/create", (req, res) => {
    console.log(req.body);
    // TODO: events now have a new table
    const queryObj = {
      ownerId: 1,
      startDate: req.body.from,
      endDate: req.body.to,
      closeSubmission: req.body.deadline,
      title: req.body.title,
      detail: req.body.description,
      link: null
    };
    event.newEvent(queryObj).then(() => {
      res.json({ success : true});
    });
  });

  return router;
};

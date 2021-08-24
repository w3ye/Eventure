const EVENT = require("../lib/event-queries");
const USER = require("../lib/user-queries");
const express = require("express");
const router = express.Router();
const { splitName } = require("../helper");

module.exports = (db) => {
  const event = new EVENT(db);
  const user = new USER(db);
  router.post("/create", (req, res) => {
    const name = splitName(req.body.name);
    const userQueryObj = {
      firstName: name[0],
      lastName: name.length === 2 ? name[1] : null,
      email: req.body.email,
    };

    user
      .newUser(userQueryObj)
      .then((result) => {
        return result.id;
      })
      .then((id) => {
        const eventQueryObj = {
          ownerId: id,
          startDate: req.body.from,
          endDate: req.body.to,
          closeSubmission: req.body.deadline,
          title: req.body.title,
          detail: req.body.description,
          // TODO implement link
          link: null,
        };

        // newEvent needs to be called within the newUser promise
        // events table need user_id as reference
        event.newEvent(eventQueryObj).then(() => {
          res.json({ success: true});
        });
      });
  });
  return router;
};

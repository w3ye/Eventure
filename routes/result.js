const express = require('express');
const path = require("path");
const router  = express.Router();
const VOTE = require('../lib/user-vote-queries');
const EVENT = require('../lib/event-queries');
const { splitName } = require('../helper');

module.exports = (db) => {
  const vote = new VOTE(db);
  const event = new EVENT(db)

  router.get('/api/result/:link_val', (req, res) => {
    vote.getVoteByEventId(req.params.link_val)
    .then((result) => {
      console.log(result)
    });
  })

  router.get("/result/:link_val", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"))
  });
  return router;
};
const express = require('express');
const router  = express.Router();
const VOTE = require('../lib/user-vote-queries');
const EVENT = require('../lib/event-queries');
const { splitName } = require('../helper');

module.exports = (db) => {
  const vote = new VOTE(db);
  const event = new EVENT(db)
  router.get('/result/:link_val', (req, res) => {
    const link = req.params.link_val;

    vote.getVoteByEventId(link)
    .then((result) => {
      console.log(result)
    });

  })
  return router;
};

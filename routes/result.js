const express = require("express");
const path = require("path");
const router = express.Router();
const VOTE = require("../lib/user-vote-queries");
const EVENT = require("../lib/event-queries");
const { splitName } = require("../helper");
const { query } = require("express");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

module.exports = (db) => {
  const vote = new VOTE(db);
  const event = new EVENT(db);

  router.get("/api/result/:link_val", (req, res) => {
    vote.getVoteByEventId(req.params.link_val).then((result) => {
      console.log(result);
    });
  });

  router.get("/result/:link_val", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
  });

  router.get("/api/rank/:link_val", (req, res) => {
    const query = `
      SELECT COUNT(*), a_day FROM time_slots
      WHERE event_id = $1
      GROUP BY a_day
      ORDER BY COUNT(*) DESC;
    `;
    db.query(query, [req.session["event_id"]])
      .then((result) => {
        console.log(result.rows);
        res.send(result.rows)
      });
  });
  return router;
};


/* `
SELECT user_id
FROM time_slots
WHERE a_day = $1;
`
*/

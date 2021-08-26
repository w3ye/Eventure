/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const USER = require('../lib/user-queries');
const { splitName } = require('../helper');

module.exports = (db) => {
  const user = new USER(db);
  router.post("/create", (req, res) => {
    const name = splitName(req.body.name);
    const userQueryObj = {
      firstName: name[0],
      lastName: name.length === 2 ? name[1] : null,
      email: req.body.email,
    };

    user.newUser(userQueryObj)
    .then((result) => {
      return { success: true };
    });

  });
  return router;
};

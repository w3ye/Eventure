module.exports = class Event {
  constructor(db) {
    this.db = db;
  }

  get events() {
    return this.db
      .query("SELECT * FROM events")
      .then((data) => {
        return data.rows;
      })
      .catch((err) => {
        return err;
      });
  }

  newEvent(queryObj) {
    const query = `
INSERT INTO events (owner_id, start_date, end_date, close_submission, detail)
VALUES
($1, $2, $3, $4, $5);`;
    console.log(query);
    return this.db.query(query, [queryObj.ownerId, queryObj.startDate, queryObj.endDate, queryObj.closeSubmission, queryObj.detail])
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      });
  }
};

// const db = require('../lib/db');

// const getEvents = (data) => {
//   console.log("data from:", data);
//   console.log("database:", db)
//   return this.db.query('SELECT * FROM products ORDER BY id DESC;')
//     .then((response) => {
//       return response.rows;
//     });
// };

// module.exports = { getEvents };

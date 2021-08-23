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

  getEventById(eventId) {
    return this.db
      .query(`SELECT * FROM events WHERE id = $1`, [eventId])
      .then((result) => result.rows[0])
      .catch((err) => err);
  }

  newEvent(queryObj) {
    const query = `
INSERT INTO events (owner_id, start_date, end_date, close_submission, detail)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;`;
    console.log(query);
    return this.db
      .query(query, [
        queryObj.ownerId,
        queryObj.startDate,
        queryObj.endDate,
        queryObj.closeSubmission,
        queryObj.detail,
      ])
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  deleteEvent(eventId) {
    const query = `
    DELETE FROM events
    WHERE id = $1
    RETURNING *;
    `;

    return this.db
      .query(query, [eventId])
      .then((result) => result)
      .catch((err) => err);
  }
};

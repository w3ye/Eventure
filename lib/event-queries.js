module.exports = class Event {
  /**
   *
   * @constructor
   * @param {Object} db - Database connection
   */
  constructor(db) {
    this.db = db;
  }

  /**
   * Display every entry in the events table
   * @returns {Promise.<query>}
   */
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

  /**
   * Gets the event using the event id
   * @param {Number} eventId
   * @returns {Promise.<query>}
   */
  getEventById(eventId) {
    return this.db
      .query(`SELECT * FROM events WHERE id = $1`, [eventId])
      .then((result) => result.rows[0])
      .catch((err) => err);
  }

  /**
   * Create a new event
   * @param {Object} queryObj
   * @returns {Promise.<query>}
   */
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

  /**
   * Deletes an event
   * @param {int} eventId
   * @returns {Promise.<query>}
   */
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

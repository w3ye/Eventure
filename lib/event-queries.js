module.exports = class Event {
  constructor(db) {
    this.db = db;
  }

  /**
   * Display every entry in the events table
   * @returns {Promise.<query>}
   */
  getEvents() {
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
   * @returns {Promise.<Obj>}
   */
  newEvent(queryObj) {
    const query = `
    INSERT INTO events (owner_id, start_date, end_date, close_submission, title, detail, link)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;`;

    return this.db
      .query(query, Object.values(queryObj))
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        return err;
      });
  }

  generateRange(eventId) {
    const query = `
      SELECT start_date, end_date
      FROM events
      WHERE id=$1;
      `

    return this.db
      .query(query, [eventId])
      .then(result => {
        return result.rows[0];
      })
      .catch((err) => {
        return err;
      });
  };

  generateDaysObject(daysOptions) {
    const startDate = daysOptions.start_date.toISOString()
    const endDate = daysOptions.end_date.toISOString()
    //Can't use postgres variables inside of a string, vital that start and end date inputs are validated to avoid SQL injection
    const query = `
    SELECT t.day::date
    FROM generate_series(timestamp '${startDate}', timestamp '${endDate}', interval '1 day') AS t(day);
    `

    return this.db
      .query(query)
      .then(result => {
        return result.rows;
      })
      .catch((err) => {
        return err;
      });
  };

  findLink(eventId) {
    const query = `
      SELECT link
      FROM events
      WHERE id = $1;
    `;

    return this.db
      .query(query, [eventId])
      .then((result) => {
        return result.rows[0];
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

module.exports = class Event {
  constructor(db) {
    this.db = db;
  }

  get events() {
    return this.db.query('SELECT * FROM events')
      .then(data => {
        return data.rows;
      })
      .catch(err => {
        return err;
      });
  }

  newEvent(ownerId, startDate, endDate, closeSubmission, detail) {
    const query = `
INSERT INTO events (owner_id, start_date, end_date, close_submission, detail)
VALUES
($1, $2, $3, $4, $5)
RETURNING *`;
    return this.db.query(query, [ownerId, startDate, endDate, closeSubmission, detail])
      .then(result => {
        return result.rows[0];
      })
      .catch(err => {
        return err;
      });
  }
};

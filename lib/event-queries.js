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
        return err.message;
      });
  }
};

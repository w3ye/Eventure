module.exports = class Vote {
  constructor(db) {
    this.db = db;
  }

  getVoteByEventId(link) {
    const query = `
      SELECT * FROM events
      WHERE link = $1
    `;

    return this.db
      .query(query, [link])
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        return err;
      });
  }
};

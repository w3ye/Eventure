module.exports = class User {
  constructor(db) {
    this.db = db;
  }

  /**
   * Return all users
   * @return {Promise}
   */
  getUsers() {
    return this.db
      .query("SELECT * FROM users")
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        return err;
      });
  }

  /**
   * Finds the user using userId
   * @param {Number} userId
   * @returns {Promise} - user or an error
   */
  getUserById(userId) {
    return this.db
      .query(`SELECT * FROM users WHERE id = $1`, [userId])
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        return err;
      });
  }

  /**
   * Insert a new user to database
   * @param {Object} queryObj - an object containg user's first and last name and their email
   * @returns {Promise} - success or err
   */
  newUser(queryObj) {
    const query = `
    INSERT INTO users (first_name, last_name, email)
    VALUES
    ($1, $2, $3)
    RETURNING *;`;
    return this.db
      .query(query, Object.values(queryObj))
      .then((result) => {
        //console.log(result.rows);
        return result.rows[0];
      })
      .catch((err) => {
        return err;
      });
  }
};

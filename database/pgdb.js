const humps = require('humps');

module.exports = (pgPool) => {
  return {
    getUser(apiKey) {
      return pgPool.query(`
        select * from users
        where api_key = $1
      `, [apiKey]).then((response) => {
        return humps.camelizeKeys(response.rows[0]);
      });
    },

    getContests(user) {
      return pgPool.query(`
        select * from contests
        where created_by = $1
      `, [user.id]).then((response) => {
        return humps.camelizeKeys(response.rows);
      });
    },
  };
};

const database = require("../../database/client");

const getAllTeam = (req, res) => {
  database
    .query("SELECT * FROM team")
    .then(([team]) => {
      res.json(team);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { getAllTeam };

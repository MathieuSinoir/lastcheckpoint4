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

const getPlayersByPosition = (req, res) => {
  const PlayerPositionId = req.params.id;
  database
    .query("SELECT * FROM team WHERE user_id=?", [PlayerPositionId])
    .then(([players]) => {
      res.json(players);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { getAllTeam, getPlayersByPosition };

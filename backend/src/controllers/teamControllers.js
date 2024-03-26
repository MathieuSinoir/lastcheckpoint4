const database = require("../../database/client");

const getAllTeam = async (req, res, next) => {
  try {
    const [teams] = await database.query("SELECT * FROM team");
    res.json(teams);
  } catch (err) {
    next(err);
  }
};
const getPlayersByPosition = async (req, res, next) => {
  try {
    const PlayerPositionId = req.params.poste;
    const [players] = await database.query("SELECT * FROM team WHERE poste=?", [
      PlayerPositionId,
    ]);
    res.json(players);
  } catch (err) {
    next(err);
  }
};

const addPlayer = async (req, res, next) => {
  const { name, poste, description, userId } = req.body;

  try {
    const results = await database.query(
      "INSERT INTO team (name, poste, description, creation_datetime, userId) VALUES(?,?,?,NOW(),?)",
      [name, poste, description, userId]
    );

    console.info(results);
    res.status(200).send("Ajouté avec succès");
  } catch (err) {
    next(err);
  }
};

const updatePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, poste, description } = req.body;

    const result = await database.query(
      "UPDATE team SET name = ?, poste = ?, description = ?, creation_datetime = NOW() WHERE id = ?",
      [name, poste, description, id]
    );

    console.info(result);
    res.send("Joueur modifié avec succès.");
  } catch (err) {
    next(err);
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await database.query("DELETE FROM team WHERE id=?", [id]);

    console.info(result);
    res.send("Joueur supprimé avec succès.");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllTeam,
  getPlayersByPosition,
  addPlayer,
  updatePlayer,
  deletePlayer,
};

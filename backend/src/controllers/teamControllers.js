const database = require("../../database/client");

const getAllTeam = async (req, res) => {
  try {
    const [teams] = await database.query("SELECT * FROM team");
    res.json(teams);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Une erreur est survenue lors de la récupération des équipes.");
  }
};
const getPlayersByPosition = async (req, res) => {
  try {
    const PlayerPositionId = req.params.poste;
    const [players] = await database.query("SELECT * FROM team WHERE poste=?", [
      PlayerPositionId,
    ]);
    res.json(players);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Une erreur est survenue lors de la récupération des joueurs par position."
      );
  }
};

const addPlayer = async (req, res) => {
  const { name, poste, description, userId } = req.body;

  try {
    const results = await database.query(
      "INSERT INTO team (name, poste, description, creation_datetime, userId) VALUES(?,?,?,NOW(),?)",
      [name, poste, description, userId]
    );

    console.info(results);
    res.status(200).send("Ajouté avec succès");
  } catch (err) {
    console.error(err);
    res.status(500).send("Une erreur est survenue lors de l'ajout du joueur");
  }
};

const updatePlayer = async (req, res) => {
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
    console.error(err);
    res
      .status(500)
      .send("Une erreur s'est produite lors de la modification du joueur.");
  }
};
const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await database.query("DELETE FROM team WHERE id=?", [id]);

    console.info(result);
    res.send("Joueur supprimé avec succès.");
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Une erreur s'est produite lors de la suppression du joueur.");
  }
};

module.exports = {
  getAllTeam,
  getPlayersByPosition,
  addPlayer,
  updatePlayer,
  deletePlayer,
};

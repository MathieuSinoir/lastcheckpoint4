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
  const PlayerPositionId = req.params.poste;
  database
    .query("SELECT * FROM team WHERE poste=?", [PlayerPositionId])
    .then(([players]) => {
      res.json(players);
    })
    .catch((err) => {
      console.error(err);
    });
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

const updatePlayer = (req, res) => {
  const { id } = req.params; // Utilisation de la destructuration pour une meilleure clarté
  const { name, poste, description } = req.body; // Idem ici pour les propriétés de req.body

  database
    .query(
      "UPDATE team SET name = ?, poste = ?, description = ?, creation_datetime = NOW() WHERE id = ?",
      [name, poste, description, id]
    )
    .then((result) => {
      console.info(result);
      res.send("Joueur modifié avec succès.");
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send("Une erreur s'est produite lors de la modification du joueur.");
    });
};

module.exports = { getAllTeam, getPlayersByPosition, addPlayer, updatePlayer };

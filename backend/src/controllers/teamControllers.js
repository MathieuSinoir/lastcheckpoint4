const tables = require("../tables");

const getAllTeam = async (req, res, next) => {
  try {
    const teams = await tables.team.readAll("SELECT * FROM team");
    res.json(teams);
  } catch (err) {
    next(err);
  }
};

const getPlayersByPosition = async (req, res, next) => {
  const { poste } = req.params;
  try {
    const playerByposition = await tables.team.read(poste);
    res.json(playerByposition);
  } catch (err) {
    next(err);
  }
};

const addPlayer = async (req, res, next) => {
  const playersInfos = {
    name: req.body.name,
    poste: req.body.poste,
    description: req.body.description,
  };

  try {
    const result = await tables.team.create(playersInfos);
    console.info(result);
    res.status(200).json({
      msg: "Joueur enregistré avec succès",
      status: result,
    });
  } catch (err) {
    next(err);
  }
};

const updatePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, poste, description } = req.body;

    const result = await tables.team.update(id, { name, poste, description });

    console.info(result);
    res.send("Joueur modifié avec succès.");
  } catch (err) {
    next(err);
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await tables.team.delete(id);

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

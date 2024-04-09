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
    const playerByPosition = await tables.team.read(poste);
    res.json(playerByPosition);
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
  const playersInfos = {
    name: req.body.name,
    poste: req.body.poste,
    description: req.body.description,
    id: req.params.id,
  };

  try {
    const result = await tables.team.update(playersInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "joueur introuvable" });
    } else {
      res.json({ msg: "joueur modifié avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    const result = await tables.team.destroy(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "Joueur introuvable" });
    } else {
      res.json({ msg: "joueur supprimé avec succès" });
    }
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

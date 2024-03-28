const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  constructor() {
    super({ table: "team" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(poste) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where poste = ?`,
      [poste]
    );
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows;
  }

  async create(team) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (name, poste, description, creation_datetime) VALUES (?, ?, ?, NOW())`,
      [team.name, team.poste, team.description]
    );
    return rows;
  }
}

module.exports = TeamManager;

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

  async create(team) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (name, poste, description, creation_datetime) VALUES (?, ?, ?, NOW())`,
      [team.name, team.poste, team.description]
    );
    return rows;
  }

  async update(team) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET name=?, poste=?, description=?, creation_datetime=NOW() WHERE id=?`,
      [team.name, team.poste, team.description, team.id]
    );
    return rows;
  }

  async destroy(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows;
  }
}

module.exports = TeamManager;

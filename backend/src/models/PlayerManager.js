const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  constructor() {
    super({ table: "team" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }
}

module.exports = PlayerManager;

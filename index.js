const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize('restful_sequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been estabilished successfully.');
    const result = await sequelize.query("SELECT * FROM `siswa`", { type: QueryTypes.SELECT });
    console.log(result);
  } catch (error) {
    console.log('Unable to connect to the databse:', error);
  }
}

main();
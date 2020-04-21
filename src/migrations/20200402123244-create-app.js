
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Apps', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    teamId: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.JSON,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Apps'),
};

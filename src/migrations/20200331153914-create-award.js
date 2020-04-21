
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Awards', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    projectId: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    subclass: {
      allowNull: true,
      type: Sequelize.STRING,
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
  down: (queryInterface) => queryInterface.dropTable('Awards'),
};

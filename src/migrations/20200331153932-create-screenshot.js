
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Screenshots', {
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
    image: {
      allowNull: false,
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
  down: (queryInterface) => queryInterface.dropTable('Screenshots'),
};


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Projects', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    eventId: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    groupId: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    regionId: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    demoVideo: {
      allowNull: true,
      type: Sequelize.JSON,
    },
    presentationVideo: {
      allowNull: true,
      type: Sequelize.JSON,
    },
    sourceUrl: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    viewUrl: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    photo: {
      allowNull: true,
      type: Sequelize.JSON,
    },
    qAndA: {
      allowNull: true,
      type: Sequelize.JSON,
    },
    featured: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false,
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
  down: (queryInterface) => queryInterface.dropTable('Projects'),
};

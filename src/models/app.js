module.exports = (sequelize, DataTypes) => {
  const App = sequelize.define('App', {
    teamId: DataTypes.STRING,
    type: DataTypes.STRING,
    data: DataTypes.JSON,
  }, {});
  App.associate = (models) => {
    App.belongsTo(models.Project);
  };
  return App;
};

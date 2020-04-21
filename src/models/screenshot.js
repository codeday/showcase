module.exports = (sequelize, DataTypes) => {
  const Screenshot = sequelize.define(
    'Screenshot',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      projectId: DataTypes.STRING,
      image: DataTypes.JSON,
    },
    {}
  );
  Screenshot.associate = (models) => {
    Screenshot.belongsTo(models.Project);
  };
  return Screenshot;
};

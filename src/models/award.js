module.exports = (sequelize, DataTypes) => {
  const Award = sequelize.define(
    'Award',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      projectId: DataTypes.STRING,
      subclass: DataTypes.STRING,
    },
    {}
  );
  Award.associate = (models) => {
    Award.belongsTo(models.Project);
  };
  return Award;
};

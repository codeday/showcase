module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    'Member',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      userId: DataTypes.STRING,
      projectId: DataTypes.STRING,
    },
    {}
  );
  Member.associate = (models) => {
    Member.belongsTo(models.Project);
  };
  return Member;
};

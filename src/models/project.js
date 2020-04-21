const randomId = require('../utils/random-id');

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'Project',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      eventId: DataTypes.STRING,
      groupId: DataTypes.STRING,
      regionId: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      demoVideo: DataTypes.JSON,
      presentationVideo: DataTypes.JSON,
      sourceUrl: DataTypes.STRING,
      viewUrl: DataTypes.STRING,
      photo: DataTypes.JSON,
      featured: DataTypes.BOOLEAN,
      qAndA: DataTypes.JSON,
    },
    {
      hooks: {
        beforeCreate: (instance) => {
          // eslint-disable-next-line no-param-reassign
          instance.id = randomId('prj');
        },
      },
    }
  );
  Project.associate = (models) => {
    Project.hasMany(models.Member);
    Project.hasMany(models.Screenshot);
    Project.hasMany(models.Award);
  };
  return Project;
};

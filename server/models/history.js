module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define(
    'History',
    {
      text: DataTypes.STRING,
      dataModel: DataTypes.STRING,
      programmingCode: DataTypes.STRING,
      loss: DataTypes.STRING,
      author: DataTypes.STRING,
      level: DataTypes.STRING
    },
    {}
  );
  History.associate = function(models) {
    // associations can be defined here
  };
  History.sync({ alter: true });
  return History;
};

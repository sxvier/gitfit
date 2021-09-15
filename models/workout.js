
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Workout.belongsTo(models.User)
    }
  };
  Workout.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    reps: DataTypes.INTEGER,
    start_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Workout',
  });
  return Workout;
};
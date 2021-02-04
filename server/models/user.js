'use strict';
const {
  Model
} = require('sequelize'); 
const {hashPass} = require('../helpers/bycrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: { 
      type : DataTypes.STRING,
      allowNull : false, 
      validate : { 
        isEmail : { 
          args : true,
          msg : 'Invalid email format'
        }
      }
    }, 
    password: { 
      type : DataTypes.STRING, 
      allowNull : false, 
      validate : { 
        notEmpty : { 
          args : true,
          msg : 'password required'
        }, 
        notNull : { 
          args : true,
          msg : 'password required'
        }
      } 
    }, 
  }, { 
    hooks : { 
      beforeCreate : (user,option) => { 
        user.password = hashPass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
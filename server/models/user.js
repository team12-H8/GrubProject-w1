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
      unique: {
        msg: 'Email is already register'
      },
      allowNull : {
        args: false,
        msg: 'Email is required'
      },
      validate : { 
        isEmail : { 
          args : true,
          msg : 'Invalid email format'
        }
      },
      notEmpty: {
        msg: 'Email is required'
      }
    }, 
    password: { 
      type : DataTypes.STRING, 
      allowNull : false, 
      validate : { 
        notEmpty : { 
          args : true,
          msg : 'Password is required'
        }, 
        notNull : { 
          args : true,
          msg : 'Password is required'
        },
        len: {
          args: [6],
          msg: 'Password is more than or equal 6 characters'
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
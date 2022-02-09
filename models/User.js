const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
	checkPassword(loginPassword) {
		return bcrypt.compareSync(loginPassword, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true, // TODO: check if this is needed
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				// TODO: check if I need more validation
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// TODO: see what other validation can go here
				len: [6],
			},
		},
	},
	{
		hooks: {
			async beforeCreate(newUserData) {
				newUserData.password = await bcrypt.hash(
					newUserData.password,
					10
				);
				return newUserData;
			},
		},
		sequelize,
		underscored: true,
		modelName: 'user',
	}
);

module.exports = User;

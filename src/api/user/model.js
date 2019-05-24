import bcrypt from 'bcrypt'
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            set: function (val) {
                if (!val) {
                    return
                }
                const hash = bcrypt.hashSync(val, 9)
                this.setDataValue('password', hash)
            }
        },
        avatar: {
            type: DataTypes.STRING,
            get: function() {
                const value = this.getDataValue('avatar')
                return `http://localhost:3000/${value}`
            }
        },
        role: DataTypes.STRING,
        fullname: DataTypes.STRING
    })

    return User
}
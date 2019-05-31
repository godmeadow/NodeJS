module.exports = (sequelize, DataTypes) => {
    var Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: DataTypes.INTEGER,
        orderDate: DataTypes.DATE
    })

    return Order
}
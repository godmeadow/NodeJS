module.exports = (sequelize, DataTypes) => {
    var OrderDetail = sequelize.define('OrderDetail', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sellingPrice: DataTypes.DECIMAL,
        quantity: DataTypes.INTEGER
    })

    OrderDetail.associate = function (models) {
        models.OrderDetail.belongsTo(models.Product, {
            as: 'product'
        });
    };

    OrderDetail.associate = function (models) {
        models.OrderDetail.belongsTo(models.Order, {
            as: 'order'
        });
    };

    return OrderDetail
}
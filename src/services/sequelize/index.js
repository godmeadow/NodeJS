import Sequelize from 'sequelize'
import { mysql } from './../../config'

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password,
    { dialect: 'mysql' })

var userModel = sequelize['import']('../../api/user/model');
var productModel = sequelize['import']('../../api/product/model');
var supplierModel = sequelize['import']('../../api/supplier/model');
var orderModel = sequelize['import']('../../api/order/model');

const db = {
    User: userModel,
    Product: productModel,
    Supplier: supplierModel,
    Order: orderModel
}

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

module.exports = db;
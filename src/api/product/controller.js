import db from './../../services/sequelize'
const Product = db.Product

export const create = (req, res) => {
    const body = req.body
    Product.create(body).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const index = (req, res) => {
    Product.findAll({include: [{model: User, as: 'createdBy'}]}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Product.update(body, { where: { id: id }}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const show = (req, res) => {
    const id = req.params.id
    Product.findByPk(id).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const remove = (req, res) => {
    const id = req.params.id
    Product.destroy({ where: { id: id } }).then(data => {
        res.status(200).send()
    }).catch(err => {
        res.status(404).send(err)
    })
}
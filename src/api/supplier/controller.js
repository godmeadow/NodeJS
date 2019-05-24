import db from './../../services/sequelize'
const Supplier = db.Supplier

export const create = (req, res) => {
    const body = req.body
    Supplier.create(body).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const index = (req, res) => {
    Supplier.findAll().then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Supplier.update(body, {where: { id: id }}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const show = (req, res) => {
    const id = req.params.id
    Supplier.findByPk(id).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const remove = (req, res) => {
    const id = req.params.id
    Supplier.destroy({ where: { id: id }}).then(data => {
        res.status(200).send()
    }).catch(err => {
        res.status(404).send(err)
    })
}
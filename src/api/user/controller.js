import db from './../../services/sequelize'
const User = db.User

export const create = (req, res) => {
    const body = req.body
    User.create(body).then((data) => {
        res.status(200).send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const index = (req, res) => {
    User.findAll().then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const update = (req, res) => {
    const id = req.params.id
    const body = req.body
    User.update(body, { where: { id: id }}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const show = (req, res) => {
    const id = req.params.id
    User.findByPk(id).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const remove = (req, res) => {
    const id = req.params.id
    User.destroy({ where: { id: id }}).then(data => {
        res.status(200).send()
    }).catch(err => {
        res.status(404).send(err)
    })
}
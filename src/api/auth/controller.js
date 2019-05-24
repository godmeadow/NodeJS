import db from './../../services/sequelize'
const User = db.User
import { sign } from './../../services/jwt'
export const login = (req, res, next) => {
    const user = req.user
    sign(user.id).then(token => {
        const view = {
            username: user.username,
            fullname: user.fullname,
            token: user.token,
            role: user.role,
            avatar: user.avatar
        }
        res.status(200).json(view)
    }).catch(err => {
        res.status(401).json(err)
    })
}

export const register = (req, res, next) => {
    const body = req.body
    const file = req.file
    console.log(file)
    body.avatar = file.path
    User.create(body).then((data) => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const forgotPassword = (req, res, next) => {
    
}
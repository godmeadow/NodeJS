import { Router } from 'express'
import { password } from '../../services/passport'
import { login, register, forgotPassword} from './controller'
import path from 'path'
const router = new Router()
import multer from 'multer'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
})
var upload = multer( { storage: storage })

router.post('/login', password(), login)
router.post('/register', upload.single('avatar'), register)
router.post('/forgot', forgotPassword)

export default router
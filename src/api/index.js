import { Router } from 'express'
import user from './user'
import auth from './auth'
import product from './product'
import supplier from './supplier'
import order from './order'
const router = new Router()

router.use('/auth', auth)
router.use('/users', user)
router.use('/products', product)
router.use('/suppliers', supplier)
router.use('/orders', order)

export default router
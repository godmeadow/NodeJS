import { Router } from 'express'
import { create, index, update, show, remove} from './controller'
const router = new Router()
/**
 * @api {get} /products Retrieve products
 * @apiName Retrieve products
 * @apiGroup Product
 * @apiPermission user
 * @apiParam {String} access_token User access token
 * @apiSuccess (Success 200) {String} count Total amount of products 
 * @apiSuccess {Object[]} rows List of products
 * @apiError (Error 4xx) {Object} 400 Some parameters may contain invalid values
 * @apiError 401 user access only
 */

 /**
 * @api {get} /users Retrieve product
 * @apiName Retrieve product
 * @apiGroup Product
 * @apiPermission user
 * @apiSuccess (Success 200) {Object} food Food's data
 * @apiError (Error 4xx) {Object} 400 Some parameters may contain invalid values
 * @apiError 404 Food not found
 * @apiError 401 user access only
 */

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router

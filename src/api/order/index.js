import { Router } from 'express'
import { create, index, update, show, remove} from './controller'
const router = new Router()
/**
 * @api {get} /orders Retrieve orders
 * @apiName Retrieve orders
 * @apiGroup Order
 * @apiPermission user
 * @apiParam {String} access_token User access token
 * @apiSuccess (Success 200) {String} count Total amount of orders 
 * @apiSuccess {Object[]} rows List of orders
 * @apiError (Error 4xx) {Object} 400 Some parameters may contain invalid values
 * @apiError 401 user access only
 */

 /**
 * @api {get} /orders Retrieve order
 * @apiName Retrieve order
 * @apiGroup Order
 * @apiPermission user
 * @apiSuccess (Success 200) {Object} order Order's data
 * @apiError (Error 4xx) {Object} 400 Some parameters may contain invalid values
 * @apiError 404 Order not found
 * @apiError 401 user access only
 */

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router

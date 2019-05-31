import { Router } from 'express'
import { create, index, update, show, remove} from './controller'
const router = new Router()
/**
 * @api {get} /orderdetails Retrieve orderdetails
 * @apiName Retrieve orderdetails
 * @apiGroup OrderDetail
 * @apiPermission user
 * @apiParam {String} access_token User access token
 * @apiSuccess (Success 200) {String} count Total amount of order-detail
 * @apiSuccess {Object[]} rows List of order-detail
 * @apiError (Error 4xx) {Object} 400 Some parameters may contain invalid values
 * @apiError 401 user access only
 */

 /**
 * @api {get} /orderdetails Retrieve orderdetail
 * @apiName Retrieve orderdetail
 * @apiGroup OrderDetail
 * @apiPermission user
 * @apiSuccess (Success 200) {Object} orderdetail OrderDetail's data
 * @apiError (Error 4xx) {Object} 400 Some parameters may contain invalid values
 * @apiError 404 OrderDetail not found
 * @apiError 401 user access only
 */

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router

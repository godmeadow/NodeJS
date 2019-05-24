import { Router } from 'express'
import { create, index, update, show, remove } from './controller'
const router = new Router()
/**
 * @api {get} /suppliers Retrieve suppliers
 * @apiName Retrieve suppliers
 * @apiGroup Supplier
 * @apiPermission admin
 * @apiParam {String} access_token User access token
 * @apiSuccess (Success 200) {Object[]} suppliers List of suppliers
 * @apiError (Error 4xx) {Object} 400 Some parameters may contain invalid values
 * @apiError 401 user access only
 */

 /**
 * @api {get} /users Retrieve supplier
 * @apiName Retrieve supplier
 * @apiGroup Supplier
 * @apiPermission admin
 * @apiSuccess (Success 200) {Object} supplier Supplier's data
 * @apiError (Error 4xx) 404 Supplier not found
 */
router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router

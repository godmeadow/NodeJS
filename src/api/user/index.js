import { Router } from 'express'
// import { master, token } from '../../services/passport'
import { create, index, update, show, remove } from './controller'
const router = new Router()
/**
 * @api {get} /users Retrieve users
 * @apiName Retrieve users
 * @apiGroup User
 * @apiPermission admin
 * @apiParam {String} access_token User access token
 * @apiSuccess (Success 200) {Object[]} users List of users
 * @apiError (Error 4xx) {Object} 400 Some parameters may contain invalid values
 * @apiError 401 user access only
 */

/**
 * @api {get} /users Retrieve user
 * @apiName Retrieve user
 * @apiGroup User
 * @apiPermission public
 * @apiSuccess (Success 200) {Object} user User's data
 * @apiError (Error 4xx) 404 User not found
 */

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router

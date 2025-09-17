import express from 'express'
import { updateUser , deleteUser , getSingleUser , getAllUsers} from '../Controllers/userController.js'
import { authenticate ,restrict } from '../auth/verifyToken.js'
const router = express.Router()
router.get('/:id',authenticate, getSingleUser)
router.get('/',authenticate,getAllUsers)
router.put('/:id',authenticate,restrict(["admin"]),updateUser)
router.delete('/:id',authenticate,restrict(["admin"]),deleteUser)


export default router
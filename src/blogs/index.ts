import {Router} from 'express'
import {getBlogsController} from './getBlogsController'
import { postBlogsController } from './postBlogsController'
import { inputCheckErrorsMiddleware, blogInputValidators } from '../validators/blogsValidators'
import { getBlogsControllerById } from './getBlogsControllerById'
import { updateBlogsController } from './updateBlogsController'
import { deleteBlogsController } from './deleteBlogsController'
import { authMiddleware } from '../validators/authMiddleware'

export const blogsRouter = Router()
 
blogsRouter.get('/', getBlogsController)
blogsRouter.post('/', authMiddleware, blogInputValidators, inputCheckErrorsMiddleware, postBlogsController)
blogsRouter.get('/:id', getBlogsControllerById)
blogsRouter.put('/:id',  authMiddleware, blogInputValidators, inputCheckErrorsMiddleware, updateBlogsController)
blogsRouter.delete('/:id', authMiddleware, deleteBlogsController)
// ...
 
// не забудьте добавить роут в апп
import {Router} from 'express'
import {getBlogsController} from './getBlogsController'
import { postBlogsController } from './postBlogsController'
import { inputCheckErrorsMiddleware, postInputValidators } from '../validators/blogsValidators'
import { getBlogsControllerById } from './getBlogsControllerById'
import { updateBlogsController } from './updateBlogsController'
import { deleteBlogsController } from './deleteBlogsController'

export const blogsRouter = Router()
 
blogsRouter.get('/', getBlogsController)
blogsRouter.post('/', postInputValidators, inputCheckErrorsMiddleware, postBlogsController)
blogsRouter.get('/:id', getBlogsControllerById)
blogsRouter.put('/:id',  postInputValidators, inputCheckErrorsMiddleware, updateBlogsController)
blogsRouter.delete('/:id', deleteBlogsController)
// ...
 
// не забудьте добавить роут в апп
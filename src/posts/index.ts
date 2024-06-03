import { Router } from "express";
import { getPostsController } from "./getPostsController";
import { createPostsController } from "./createPostsController";
import { postInputValidators, inputCheckErrorsMiddleware } from "../validators/postsValidators";
import { getPostControllerById } from "./getPostControllerById";
import { updatePostsController } from "./updatePostsController";
import { deletePostsController } from "./deletePostsController";
import { authMiddleware } from "../validators/authMiddleware";
export const postsRouter = Router()

postsRouter.get('/', getPostsController)
postsRouter.post('/', authMiddleware, postInputValidators, inputCheckErrorsMiddleware, createPostsController)
postsRouter.get('/:id', getPostControllerById)
postsRouter.put('/:id', authMiddleware, postInputValidators, inputCheckErrorsMiddleware, updatePostsController)
postsRouter.delete('/:id', authMiddleware, deletePostsController)
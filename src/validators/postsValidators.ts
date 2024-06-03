import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from 'express'
import { HTTP_STATUSES } from '../settings'
import { postBlogsRepository } from "../blogs/postBlogsRepository";

const postTitleInputValidator = body('title')
.isString().withMessage('title should be string')
.isLength({ max: 30 }).withMessage('title is too long')
.notEmpty()
.custom(value => {
     return /[a-z]/i.test(value)
}).withMessage('title should contain letters')

const postDescriptionValidator = body('shortDescription')
.isString().withMessage('short description should be string')
.isLength({ max: 100 }).withMessage('description is too long')
.notEmpty()
.custom(value => {
    return /[a-z]/i.test(value)
}).withMessage('description should contain letters')

const postContentValidator = body('content')
.isString().withMessage('content should be string')
.isLength({ max: 1000 }).withMessage('content is too long')
.notEmpty()
.custom(value => {
    return /[a-z]/i.test(value)
}).withMessage('content should contain letters')

const postBlogIdValidator = body('blogId')
.isString().withMessage('blogId should be string')
.notEmpty()
.custom(async (id) => {
    const blog = await postBlogsRepository.getById(id)
    if(!blog) {
        throw new Error("Blog with current id doesn't exist")
    }
    return Boolean(blog)
}).withMessage('Blog with current id does not exist')

export const postInputValidators = [
    postTitleInputValidator,
    postDescriptionValidator,
    postContentValidator,
    postBlogIdValidator
]

export const inputCheckErrorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const e = validationResult(req)

    if(!e.isEmpty()) {
        const eArray = e.array({ onlyFirstError: true }) as { path: string, msg: string }[]
        res
        .status(HTTP_STATUSES.BAD_REQUEST_400)
        .json({
            errorsMessages: eArray.map(x => ({
                message: x.msg,
                field: x.path
            }))

        })
        return
    }
    next()
}
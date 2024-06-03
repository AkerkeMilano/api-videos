import { Request, Response } from "express"
import { createPostsRepository } from './createPostsRepository';
import { HTTP_STATUSES } from "../settings";

export const createPostsController = async (req: Request, res: Response) => {
    const inputPost = await createPostsRepository(req.body)
    res.status(HTTP_STATUSES.CREATED_201).json(inputPost)
}
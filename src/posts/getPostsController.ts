import { HTTP_STATUSES } from "../settings"
import { getPostsRepository } from "./getPostsRepository"
import { Request, Response } from "express"
export const getPostsController = async (req: Request, res: Response) => {
    const posts = await getPostsRepository()
    console.log("posts---------", posts)
    res.status(HTTP_STATUSES.OK_200).json(posts)
}
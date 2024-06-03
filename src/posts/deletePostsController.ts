import { HTTP_STATUSES } from "../settings"
import { deletePostsRepository } from "./deletePostsRepository"
import { Request, Response } from "express"

export const deletePostsController = async (req: Request, res: Response) => {
    const deletedPost = await deletePostsRepository(req.params.id)
    res.status(HTTP_STATUSES.NO_CONTENT_204).json("Post was deleted")
}
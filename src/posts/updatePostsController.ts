import { HTTP_STATUSES } from "../settings"
import { updatePostsRepository } from "./updatePostsRepository"
import { Response, Request } from "express"
export const updatePostsController = async (req: Request, res: Response) => {
    const updatedPosts = await updatePostsRepository(req.params.id, req.body)

    if(!updatedPosts) {
        res.status(HTTP_STATUSES.NOT_FOUND_404).json("Post with current id doesn't exist")
        return
    }
    res.status(HTTP_STATUSES.NO_CONTENT_204).json(updatedPosts)
}
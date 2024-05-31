import { Request, Response } from "express"
import { updateBlogsRepository } from "./updateBlogsRepository"
import { HTTP_STATUSES } from "../settings"

export const updateBlogsController = async (req: Request, res: Response) => {
    const updatedBlog = await updateBlogsRepository(req.params.id, req.body)
    if(!updatedBlog) {
        res.status(HTTP_STATUSES.NOT_FOUND_404).json("Blog with current id is not found")
        return
    }

    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
}
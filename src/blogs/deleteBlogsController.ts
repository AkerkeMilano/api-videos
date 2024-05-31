import { HTTP_STATUSES } from "../settings"
import { deleteBlogsRepository } from "./deleteBlogsRepository"
import { Request, Response } from "express"
export const deleteBlogsController = async (req: Request, res: Response) => {
    const deletedId = await deleteBlogsRepository(req.params.id)
    if(deletedId === -1) {
        res.status(HTTP_STATUSES.NOT_FOUND_404).json("Blog with current id does not exist")
        return
    }
    res.status(HTTP_STATUSES.NO_CONTENT_204).json("Blog was deleted")
}
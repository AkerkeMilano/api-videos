import { Request, Response } from "express"
import { getPostByIdRepository } from "./getPostByIdRepository"
import { HTTP_STATUSES } from "../settings"

export const getPostControllerById = async (req: Request, res: Response) => {
    const post = await getPostByIdRepository(req.params.id)
    if(!post) {
        res.status(HTTP_STATUSES.NOT_FOUND_404).json("Post with current id not found")
        return;
    }
    res.status(HTTP_STATUSES.OK_200).json(post)
}
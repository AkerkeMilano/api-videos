import {Request, Response} from 'express'
import { postBlogsRepository } from './postBlogsRepository'
import { HTTP_STATUSES } from '../settings'

export const getBlogsControllerById = async (req: Request, res: Response) => {
    const blog = await postBlogsRepository.getById(req.params.id)

    if(!blog){
        res.status(HTTP_STATUSES.NOT_FOUND_404)
        .json("Blog with current id doesn't exist")
        return
    }
    
    res
    .status(HTTP_STATUSES.OK_200)
    .json(blog)
}
 
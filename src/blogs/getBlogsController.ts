import {Request, Response} from 'express'
import {db} from '../db/db'
 
export const getBlogsController = (req: Request, res: Response) => {
    const blogs = db.blogs
 
    res
        .status(200)
        .json(blogs) // отдаём видео в качестве ответа
}
 
// не забудьте добавить эндпоинт в апп
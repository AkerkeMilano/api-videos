import { HTTP_STATUSES } from "../settings"
import { deleteTestingRepository } from "./deleteTestingRepository"
import { Response, Request } from "express"

export const deleteTestingController = async (req: Request, res: Response) => {
    const result = await deleteTestingRepository()
    res.status(HTTP_STATUSES.NO_CONTENT_204).json("Db was deleted")
}
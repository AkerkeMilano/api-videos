import { db } from "../db/db"

export const deleteTestingRepository = () => {
    db.blogs = []
    db.posts = []
}
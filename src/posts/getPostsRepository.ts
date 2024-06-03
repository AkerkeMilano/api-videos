import { db } from "../db/db"

export const getPostsRepository = () => {
    return db.posts
}
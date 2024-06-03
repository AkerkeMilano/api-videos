import { db } from "../db/db"

export const getPostByIdRepository = (id: string) => {
    const post = db.posts.find(post => post.id === id)
    return post
}
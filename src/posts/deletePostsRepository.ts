import { db } from "../db/db"

export const deletePostsRepository = (id: string) => {
    const post = db.posts.find(post => post.id === id)

    if(!post){
        return
    }
    const filteredPost = db.posts.filter(post => post.id === id)
    db.posts = [...filteredPost]

    return post
}
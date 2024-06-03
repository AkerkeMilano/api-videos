import { db } from "../db/db"

export const deletePostsRepository = (id: string) => {
    const postIndex = db.posts.findIndex(post => post.id === id)

    if(postIndex === -1){
        return
    }

    db.posts.splice(postIndex, 1)
    return postIndex
}
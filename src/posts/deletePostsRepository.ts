import { db } from "../db/db"

export const deletePostsRepository = (id: string) => {
    const postIndex = db.posts.findIndex(post => post.id === id)
    const post = db.posts[postIndex]
    if(postIndex === -1){
        return
    }

    db.posts = [ ...db.posts.splice(postIndex, 1)]
    return post
}
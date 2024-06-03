import { db } from "../db/db"
import { postBlogsRepository } from "../blogs/postBlogsRepository"
import { PostInputType } from "../db/post-db-type"

export const updatePostsRepository = async (id: string, input: PostInputType) => {
    const postIndex = db.posts.findIndex(post => post.id === id) 

    if(postIndex === -1){
        return
    }
    const blog = await postBlogsRepository.getById(input.blogId)
    if(!blog){
        return
    }
    const updatedPosts = db.posts.map((post, index) => {
        if(post.id === id) {
            db.posts[index] = {
                ...input,
                id: db.posts[index].id,
                blogName: blog.name
            }
        }
    })
    return updatedPosts
}
import { db } from "../db/db"
import { PostInputType, PostDBType } from "../db/post-db-type"
import { postBlogsRepository } from "../blogs/postBlogsRepository"

export const createPostsRepository = async (input: PostInputType) => {
    const blog = await postBlogsRepository.getById(input.blogId)

    if(!blog) {
        return;
    }

    const newPost = {
        ...input,
        blogName: blog.name,
        id: Math.round(Date.now() + Math.random()).toString()
    }

    try {
        db.posts = [ ...db.posts, newPost]
    } catch(e: any) {
        return { error: e.message }
    }
    return newPost
}
import { db } from "../db/db"
import { PostInputType, PostDBType } from "../db/post-db-type"
import { postBlogsRepository } from "../blogs/postBlogsRepository"

export const createPostsRepository = async (input: PostInputType) => {
    const blog = await postBlogsRepository.getById(input.blogId)

    const updatedPost = {
        ...input,
        blogName: blog?.name,
        id: String(Date.now() + Math.random())
    }
    return updatedPost
}
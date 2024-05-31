import { BlogDBType, BlogInputType, ErrorType } from "../db/blog-db-type"
import { db } from "../db/db"

export const postBlogsRepository = {
    async create(input: BlogInputType): Promise<BlogDBType | ErrorType> {
        const newBlog: BlogDBType = {
            ...input,
            id: String(Date.now() + Math.random())
        }

        try {
            db.blogs = [...db.blogs, newBlog]
            return newBlog
        } catch(e: any) {
            return { error: e.message}
        }
    },
    async getById(id: string) {
        return db.blogs.find(blog => blog.id === id)
    }
}
import { BlogInputType } from "../db/blog-db-type"
import { db } from "../db/db"

export const updateBlogsRepository = (id: string, input: BlogInputType) => {
    const indexOfBlog = db.blogs.findIndex(blog => blog.id === id)
    const copyOfBlogs = [...db.blogs]
    if(indexOfBlog === -1) {
        return;
    }
    const updatedBlog = { ...input, id: copyOfBlogs[indexOfBlog].id}
    const updatedBlogs = [
        ...copyOfBlogs.slice(0, indexOfBlog),
        updatedBlog,
        ...copyOfBlogs.slice(indexOfBlog+1)
    ]
    db.blogs = updatedBlogs
    return updatedBlog
}
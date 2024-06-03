import { db } from "../db/db"

export const deleteBlogsRepository = (id: string) => {
    const deletedBlog = db.blogs.find(blog => blog.id === id)

    if(!deletedBlog) {
        return;
    }
    const filteredBlogs = db.blogs.filter(blog => blog.id !== id)
    db.blogs = [ ...filteredBlogs]
    return deletedBlog
}
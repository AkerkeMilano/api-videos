import { db } from "../db/db"

export const deleteBlogsRepository = (id: string) => {
    const deletedBlogIndex = db.blogs.findIndex(blog => blog.id === id)
    console.log("deletedBlogIndex--------", deletedBlogIndex)
    console.log("blogs: ", db.blogs, id)
    if(deletedBlogIndex === -1) {
        return;
    }
    db.blogs = [ ...db.blogs.splice(deletedBlogIndex, 1)]
    return deletedBlogIndex
}
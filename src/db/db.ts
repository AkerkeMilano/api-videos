import {BlogDBType} from './blog-db-type'
import { PostDBType } from './post-db-type'

const blog1: BlogDBType = {
    id: "12df",
    name: "About IT and AI",
    description: "This blogs tells about new skills required",
    websiteUrl: "https://blog.logrocket.com/"
}

const blog2: BlogDBType = {
    id: "54ggg",
    name: "Fitness and sport",
    description: "This blogs tells about activities for every day",
    websiteUrl: "https://blog.logrocket.com/"
}

const post1: PostDBType = {
    id: "34fr34",
    title: "Test title",
    shortDescription: "this is description related to bla lba",
    content: "this is content",
    blogId: "54ggg",
    blogName: "Fitness and sport"
}

const post2: PostDBType = {
    id: "65yhhhf",
    title: "Test title 2",
    shortDescription: "this is description related to bla lba 2",
    content: "this is content 2",
    blogId: "54ggg",
    blogName: "Fitness and sport"
}
 
export type DBType = { // типизация базы данных (что мы будем в ней хранить)
    blogs: BlogDBType[],
    posts: PostDBType[]
    // some: any[]
}
 
export const db: DBType = { // создаём базу данных (пока это просто переменная)
    blogs: [blog1, blog2],
    posts: [post1, post2]
    // some: []
}
 
// функция для быстрой очистки/заполнения базы данных для тестов
export const setDB = (dataset?: Partial<DBType>) => {
    if (!dataset) { // если в функцию ничего не передано - то очищаем базу данных
        db.blogs = []
        db.posts = []
        // db.some = []
        return
    }
 
    // если что-то передано - то заменяем старые значения новыми
    db.blogs = dataset.blogs || db.blogs
    db.posts = dataset.posts || db.posts
    // db.some = dataset.some || db.some
}
import {BlogDBType} from './blog-db-type'

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
 
export type DBType = { // типизация базы данных (что мы будем в ней хранить)
    blogs: BlogDBType[]
    // some: any[]
}
 
export const db: DBType = { // создаём базу данных (пока это просто переменная)
    blogs: [blog1, blog2],
    // some: []
}
 
// функция для быстрой очистки/заполнения базы данных для тестов
export const setDB = (dataset?: Partial<DBType>) => {
    if (!dataset) { // если в функцию ничего не передано - то очищаем базу данных
        db.blogs = []
        // db.some = []
        return
    }
 
    // если что-то передано - то заменяем старые значения новыми
    db.blogs = dataset.blogs || db.blogs
    // db.some = dataset.some || db.some
}
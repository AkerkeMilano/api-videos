import { req } from './test-helpers'
import {setDB} from '../src/db/db'
import {dataset1} from './datasets'
import {SETTINGS} from '../src/settings'
import { HTTP_STATUSES } from '../src/settings'

describe('/blogs', () => {
    beforeAll(async () => { // очистка базы данных перед началом тестирования
        setDB()
    })
 
    it('should get empty array', async () => {
        // setDB() // очистка базы данных если нужно
 
        const res = await req
            .get(SETTINGS.PATH.BLOGS)
            .expect(HTTP_STATUSES.OK_200) // проверяем наличие эндпоинта
 
        console.log(res.body) // можно посмотреть ответ эндпоинта
 
        expect(res.body.length).toBe(0) // проверяем ответ эндпоинта
    })
    it('should get not empty array', async () => {
        setDB(dataset1) // заполнение базы данных начальными данными если нужно
 
        const res = await req
            .get(SETTINGS.PATH.BLOGS)
            .expect(HTTP_STATUSES.OK_200)
 
        console.log(res.body)
 
        expect(res.body.length).toBe(2)
        expect(res.body[0]).toEqual(dataset1.blogs[0])
    })

    it('should create a new blog', async () => {
        const newBlog = {
            name: "About IT and AI",
            description: "This blog tells about new skills required",
            websiteUrl: "https://blog.logrocket.com/"
        }
        const createdBlog = await req.post(SETTINGS.PATH.BLOGS).send(newBlog).expect(HTTP_STATUSES.CREATED_201)
    })

    it('should find blog by id', async () => {
        console.log("dataset1.blogs[0].id", dataset1.blogs[0].id)
        const blog = await req.get(SETTINGS.PATH.BLOGS + '/' + dataset1.blogs[0].id).expect(HTTP_STATUSES.OK_200)
        expect(blog.body.id).toBe(dataset1.blogs[0].id)
    })

    it('should update blog by id', async () => {
        setDB(dataset1)
        const newBlog = {
            name: "About IT and AI",
            description: "This is updated version of blog",
            websiteUrl: "https://blog.logrocket.com/"
        }

        const res = await req.put(SETTINGS.PATH.BLOGS + '/' + dataset1.blogs[0].id).send(newBlog).expect(HTTP_STATUSES.NO_CONTENT_204)
    })

    it('should delete blog by id', async () => {
        setDB(dataset1)
        const res = await req.delete(SETTINGS.PATH.BLOGS + '/' + dataset1.blogs[0].id).expect(HTTP_STATUSES.NO_CONTENT_204)
    })
})
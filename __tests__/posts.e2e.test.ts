import { setDB } from "../src/db/db";
import { HTTP_STATUSES, SETTINGS } from "../src/settings";
import { req } from "./test-helpers";
import { dataset1 } from "./datasets";
describe('/posts', () => {
    beforeAll(async () => {
        setDB()
    })

    it('should get array of posts', async () => {
        setDB(dataset1)

        const res = await req.get(SETTINGS.PATH.POSTS).expect(HTTP_STATUSES.OK_200)

        console.log(res.body)

        expect(res.body.length).toBe(2)
    })

    it('should create a new post', async () => {
        setDB(dataset1)

        const newBlog = {
            name: "About IT and AI",
            description: "This blog tells about new skills required",
            websiteUrl: "https://blog.logrocket.com/"
        }
        const blogRes = await req.post(SETTINGS.PATH.BLOGS).send(newBlog)
        const newPost = {
            title: 'This is post about',
            shortDescription: 'fwefwefewfwe',
            content: 'fhtl,hlrt,h gl,rgler,  mkwemfkew',
            blogId: blogRes.body.id,
            blogName: blogRes.body.name
        }

        const createdPost = await req.post(SETTINGS.PATH.POSTS).send(newPost).expect(HTTP_STATUSES.CREATED_201)
    })

    it('should get by Id post', async () => {
        setDB(dataset1)
        const post = await req.get(SETTINGS.PATH.POSTS + '/' + dataset1.posts[0].id).expect(HTTP_STATUSES.OK_200)

        expect(post.body.id).toBe(dataset1.posts[0].id)
    })

    it('should update post by id', async () => {
        setDB(dataset1)

        const newPost = {
            title: 'This is post about',
            shortDescription: 'fwefwefewfwe',
            content: 'fhtl,hlrt,h gl,rgler,  mkwemfkew',
            blogId: dataset1.blogs[0].id
        }

        const posts = await req.put(SETTINGS.PATH.POSTS + '/' + dataset1.posts[0].id).send(newPost).expect(HTTP_STATUSES.NO_CONTENT_204)
    })

    it('should delete post by id', async () => {
        setDB(dataset1)

        const post = await req.delete(SETTINGS.PATH.POSTS + '/' + dataset1.posts[0].id).expect(HTTP_STATUSES.NO_CONTENT_204)
    })
})


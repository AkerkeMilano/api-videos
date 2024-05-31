export type BlogDBType = {
    id: string,
    name: string,
    description: string,
    websiteUrl: string
}

type DBType = {
    blogs: BlogDBType[],
}

const blog1: BlogDBType = {
    id: "1",
    name: "About IT and AI",
    description: "This blogs tells about new skills required",
    websiteUrl: "https://blog.logrocket.com/"
}

const blog2: BlogDBType = {
    id: "2",
    name: "Fitness and sport",
    description: "This blogs tells about activities for every day",
    websiteUrl: "https://blog.logrocket.com/"
}

// const post1: FullPostType = {
//     id: "333r3r3",
//     title: "Hello",
//     shortDescription: "This is description of my state",
//     content: "About greeting",
//     blogId: "998dff9",
//     blogName: "About IT and AI"
// }

// const post2: FullPostType = {
//     id: "bfhtr666",
//     title: "Killsddf",
//     shortDescription: "This is description of my gergr",
//     content: "About greeting ferfer",
//     blogId: "t54t555",
//     blogName: "About IT and AI"
// }

export const dataset1: DBType = {
    blogs: [blog1, blog2]
}

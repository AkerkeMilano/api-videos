export type PostDBType = {
    id: string,
    title: string,
    shortDescription: string,
    content: string,
    blogId: string,
    blogName: string
}

export type PostInputType = {
    title: string,
    shortDescription: string,
    content: string,
    blogId: string
}

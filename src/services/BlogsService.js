import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Blog } from "@/models/Blog.js"

class BlogsService{
    
    setActiveBlog(blog) {
        AppState.activeBlog = blog
    }

    async getBlogs() {
        AppState.blogs = []
        const response = await api.get('api/blogs')
        logger.log('[Get Blogs]', response.data)
        const blogData = response.data.map(responsePojo => new Blog(responsePojo))
        AppState.blogs = blogData
    }

}

export const blogsService = new BlogsService()
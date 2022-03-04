import { AxiosResponse } from "axios";
import { IBlogPost } from "_common/models/entities";
const generateBlogPost = (data: IBlogPost): IBlogPost => ({
  id: data.id,
  title: data.title,
  date: data.date,
  image: data.image,
  link: data.link,
  type: data.type,
  description: data.description,
});

export const generateBlogPosts = (data: AxiosResponse) => ({
  posts: data ? data.data.map((item: any) => generateBlogPost(item)) : [],
});

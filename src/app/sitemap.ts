import { getBlogPosts } from "./db/blog";

export default async function sitemap() {
  const baseUrl = "https://your-site.com";
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blogs", "/newsletter", "/uses", "/contact"].map(
    (route) => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...blogs];
}

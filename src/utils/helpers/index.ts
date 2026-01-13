import { connectToMongo } from "@/lib/mongoDB";
import Blog from "@/models/blog-model";

const generateSlug = (str: string) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "") // Remove non-word [a-z0-9_], non-space, non-hyphen
        .replace(/[\s_-]+/g, "-") // Replace spaces/hyphens/underscores with a single hyphen
        .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

const getAllBlogs = async () => {
    try {
        await connectToMongo();
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        return blogs;
    } catch (error) {
        console.error("Error fetching all blogs:", error);
        throw error;
    }
}

export { generateSlug, getAllBlogs }
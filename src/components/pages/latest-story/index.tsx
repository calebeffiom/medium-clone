"use client"
import { Container } from "@shared";
import ArticlePreview from "./article-preview";
import { useRecoilState } from "recoil";
import { blogsAtom } from "@/utils/states/blogsAtom";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ArticleSkeleton from "./article-skeleton";

const LatestStoriesSection = () => {
    const [blogs, setBlogs] = useRecoilState(blogsAtom);
    const [loading, setLoading] = useState(blogs.length === 0);

    const fetchBlogs = useCallback(async () => {
        if (blogs.length === 0) setLoading(true);
        try {
            const res = await axios.get("/api/publish-blog");
            if (res.data.formatBlogs) {
                setBlogs(res.data.formatBlogs);
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    }, [setBlogs, blogs.length]);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    return (
        <section>
            <Container>
                <div className="section-inner py-[60px] md:py-[100px]">
                    <div className="section-heading-cont mb-[30px] md:mb-[50px] text-center md:text-left">
                        <h2 className="text-[32px] md:text-[50px] font-semibold">Latest Stories</h2>
                        <p className="text-[16px] md:text-[18px] font-light">Stay up to date with the latest write-ups, inspiring articles, and many more.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {loading ? (
                            Array.from({ length: 8 }).map((_, i) => (
                                <ArticleSkeleton key={i} />
                            ))
                        ) : blogs && blogs.length > 0 ? (
                            blogs.map((blog: any) => (
                                <ArticlePreview
                                    key={blog.id}
                                    id={blog.id}
                                    previewImage={blog.coverImage || "/images/ice.jpeg"}
                                    heading={blog.title}
                                    description={blog.content[0]}
                                    profileImage={blog.author.image || "/images/profile.png"}
                                    userName={blog.author.name}
                                    postTime={blog.createdAt}
                                    catergory={blog.tag}
                                    slug={blog.slug}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-10">
                                <p className="text-gray-500">No stories found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default LatestStoriesSection
"use client"
import { Container } from "@shared"
import TopArticlePreview from "./top-article-preview"
import { useRecoilState } from "recoil"
import { trendingBlogsAtom } from "@/utils/states/blogsAtom"
import { useState, useCallback, useEffect } from "react"
import axios from "axios"
import ArticleSkeleton from "../latest-story/article-skeleton"

const TopStoriesSection = () => {
    const [trendingBlogs, setTrendingBlogs] = useRecoilState(trendingBlogsAtom);
    const [loading, setLoading] = useState(trendingBlogs.length === 0);

    const fetchTrendingBlogs = useCallback(async () => {
        if (trendingBlogs.length === 0) setLoading(true);
        try {
            const res = await axios.get("/api/blogs/trending");
            if (res.data.formatBlogs) {
                setTrendingBlogs(res.data.formatBlogs);
            }
        } catch (error) {
            console.error("Error fetching trending blogs:", error);
        } finally {
            setLoading(false);
        }
    }, [setTrendingBlogs, trendingBlogs.length]);

    useEffect(() => {
        fetchTrendingBlogs();
    }, [fetchTrendingBlogs]);

    return (
        <section>
            <Container>
                <div className="section-inner py-[60px] md:py-[100px]">
                    <div className="section-heading-cont mb-[30px] md:mb-[50px] text-center md:text-left">
                        <h2 className="text-[32px] md:text-[50px] font-semibold">Top Stories</h2>
                        <p className="text-[16px] md:text-[18px] font-light">Get some inspiration from the best of the best. Learn and grow with the best articles selected based on popularity.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {loading ? (
                            Array.from({ length: 10 }).map((_, i) => (
                                <ArticleSkeleton key={i} />
                            ))
                        ) : trendingBlogs && trendingBlogs.length > 0 ? (
                            trendingBlogs.slice(0, 10).map((blog: any) => (
                                <TopArticlePreview
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
                                <p className="text-gray-500">No trending stories found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default TopStoriesSection
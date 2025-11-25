"use client"
import { Container } from "@shared";
import ArticlePreview from "./article-preview";
const LatestStoriesSection = () => {
    return (
        <section>
            <Container>
                <div className="section-inner py-[100px]">
                    <div className="section-heading-cont mb-[50px]">
                        <h2 className="text-[50px] font-[600]">Latest Stories</h2>
                        <p className="text-[18px] font-[300]">Stay upto date with the lastest write ups, inspirng articles and many more.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-6">

                    <ArticlePreview
                        previewImage="/images/ice.jpeg"
                        heading="Terrifying Legend: Abandoned Portlock Alaska"
                        description="This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article"
                        profileImage="/images/profile.png"
                        userName="sara burdick"
                        postTime="a day ago"
                        catergory="Horror"
                    />

                    <ArticlePreview
                        previewImage="/images/better.jpg"
                        heading="I Deserve Better"
                        description="This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article"
                        profileImage="/images/profile.png"
                        userName="sara burdick"
                        postTime="a day ago"
                        catergory="Horror"
                    />
                     <ArticlePreview
                        previewImage="/images/talkingDrums.jpeg"
                        heading="Talking Drums to 21st-Century Parties: The"
                        description="This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article"
                        profileImage="/images/profile.png"
                        userName="sara burdick"
                        postTime="a day ago"
                        catergory="Horror"
                    />
                       <ArticlePreview
                        previewImage="/images/flower-eyes.jpeg"
                        heading="Awake In The Dark"
                        description="This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article"
                        profileImage="/images/profile.png"
                        userName="sara burdick"
                        postTime="a day ago"
                        catergory="Horror"
                    />
                       <ArticlePreview
                        previewImage="/images/ice.jpeg"
                        heading="Awake In The Dark"
                        description="This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article"
                        profileImage="/images/profile.png"
                        userName="sara burdick"
                        postTime="a day ago"
                        catergory="Horror"
                    />
                    </div>
                    </div>   
            </Container>
        </section>
    )
}
export default LatestStoriesSection
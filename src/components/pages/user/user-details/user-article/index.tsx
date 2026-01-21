"use client"
import { PinOffIcon, PinIcon } from "lucide-react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { userAtom } from "@/utils/states/userAtom";

interface UserArticleProps {
    id: string;
    previewImage: string;
    heading: string;
    description: string;
    profileImage: string;
    userName: string;
    postTime: string;
    category: string;
    slug: string;
}

const UserArticle = ({
    id,
    previewImage,
    heading,
    description,
    profileImage,
    userName,
    postTime,
    category,
    slug
}: UserArticleProps) => {
    const [user, setUser] = useRecoilState(userAtom);
    return (
        <div className="story-flex-cont h-[450px] relative">
            <div onClick={() => console.log("clicked")}>
                <img src={previewImage} className="rounded-[10px] mb-[15px] w-[100%] h-[200px]" alt="" />
                <h2 className="text-[25px] mb-[15px] line-clamp-2">{heading}</h2>
                <p className="text-[17px] w-full line-clamp-3">{Array.isArray(description) ? description[0] : description}</p>
            </div>
            <div className="article-writer-details w-[100%] flex items-center justify-between absolute bottom-0">
                <div className="author-cont flex gap-[10px] items-center">


                    <div className="writer-image-cont">
                        <img src={profileImage} className="h-[50px] rounded-full" alt="" />
                    </div>


                    <div className="writer-name-cont">
                        <h4>{userName}</h4>
                        <p className="text-[#8f8f8f] text-[13px]">{postTime} in {category}</p>
                    </div>

                </div>


                <div className="cursor-pointer">{
                    user?.pinnedStories.some((story: any) => story.id === id) ?
                        <PinOffIcon /> :
                        <PinIcon />
                }</div>
            </div>

        </div>
    )
}

export default UserArticle



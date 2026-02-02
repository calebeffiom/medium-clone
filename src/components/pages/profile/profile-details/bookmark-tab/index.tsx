import BookmarkedArticle from "../bookmarked-article"
import { useRecoilValue } from "recoil"
import { userAtom } from "@/utils/states/userAtom"
const BookmarkedTab = () => {
    const user = useRecoilValue(userAtom)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {
                user?.bookmarks.map((blog: any, index: number) => (
                    <BookmarkedArticle
                        key={index}
                        id={blog.id}
                        previewImage={blog.coverImage}
                        heading={blog.title}
                        description={blog.content}
                        profileImage={user.image}
                        userName={user.name}
                        postTime={blog.createdAt}
                        catergory={blog.tag}
                        slug={blog.slug}
                    />
                ))
            }
        </div>
    )
}
export default BookmarkedTab
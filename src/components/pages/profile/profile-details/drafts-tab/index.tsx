import UserArticle from "../user-article"
import { useRecoilValue } from "recoil"
import { userAtom } from "@/utils/states/userAtom"
const DraftsTab = () => {
    const user = useRecoilValue(userAtom)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {
                user?.blogsWritten.filter((draft: any) => draft.published === false).map((draft: any, index: number) => (
                    <UserArticle
                        key={index}
                        id={draft.id}
                        previewImage={draft.coverImage}
                        heading={draft.title}
                        description={draft.content}
                        profileImage={user.image}
                        userName={user.name}
                        postTime={draft.createdAt}
                        catergory={draft.tag}
                        slug={draft.slug}
                    />
                ))
            }
        </div>
    )
}
export default DraftsTab
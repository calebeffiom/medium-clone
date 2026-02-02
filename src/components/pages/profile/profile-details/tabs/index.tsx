import { useRecoilValue } from "recoil"
import { userAtom } from "@/utils/states/userAtom"
interface PropTypes {
    changeTab: Function,
    activeTab: string,
}
const ActiveTabs = ({ changeTab, activeTab }: PropTypes) => {
    const user = useRecoilValue(userAtom)
    const numberOfPinnedBlogs = user?.pinnedStories.length || 0
    return (
        <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-2 md:space-x-8 sm:px-1 max-w-full overflow-auto">
                <button
                    onClick={() => changeTab("stories")}
                    className={`shrink-0 pb-4 px-1 font-medium text-xs md:text-sm ${activeTab === "stories" ? "border-b-2 border-gray-800 text-gray-800" : "text-gray-500 hover:text-gray-700"} cursor-pointer whitespace-nowrap !rounded-button`}
                >
                    Stories
                </button>
                <button
                    onClick={() => changeTab("pinned")}
                    className={`shrink-0 pb-4 px-1 font-medium text-xs md:text-sm ${activeTab === "pinned" ? "border-b-2 border-gray-800 text-gray-800" : "text-gray-500 hover:text-gray-700"} cursor-pointer whitespace-nowrap !rounded-button`}
                >
                    Pinned Stories ({numberOfPinnedBlogs}/3)
                </button>
                <button
                    onClick={() => changeTab("drafts")}
                    className={`shrink-0 pb-4 px-1 font-medium text-xs md:text-sm ${activeTab === "drafts" ? "border-b-2 border-gray-800 text-gray-800" : "text-gray-500 hover:text-gray-700"} cursor-pointer whitespace-nowrap !rounded-button`}
                >
                    Drafts
                </button>
                <button
                    onClick={() => changeTab("bookmarks")}
                    className={`shrink-0 pb-4 px-1 font-medium text-xs md:text-sm ${activeTab === "bookmarks" ? "border-b-2 border-gray-800 text-gray-800" : "text-gray-500 hover:text-gray-700"} cursor-pointer whitespace-nowrap !rounded-button`}
                >
                    Bookmarks
                </button>
            </nav>
        </div>
    )
}
export default ActiveTabs
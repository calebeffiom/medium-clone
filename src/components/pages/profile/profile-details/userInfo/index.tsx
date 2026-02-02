import { Calendar, ScrollText } from "lucide-react"
import { useRecoilValue } from "recoil"
import { userAtom } from "@/utils/states/userAtom"
const UserInfo = () => {
    const user = useRecoilValue(userAtom)
    const storiesCount = user?.blogsWritten.length || 0
    return (
        <section>
            <div className="mb-6 flex flex-col sm:items-start gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden shadow-md shrink-0">
                    <img
                        src={user?.image || "/images/profile.png"}
                        alt="Profile"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="sm:pb-2">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl mb-2 sm:mb-3 md:mb-5 font-bold text-gray-800">
                        {user?.name}
                    </h1>
                    <div className="flex flex-wrap justify-start items-center text-gray-500 mt-1 gap-x-4 gap-y-2 md:gap-x-6">
                        <div className="flex items-center">
                            <Calendar className="mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-xs sm:text-sm md:text-[17px]">Joined {user?.createdAt}</span>
                        </div>
                        <div className="flex items-center">
                            <ScrollText className="mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-xs sm:text-sm md:text-[17px]">{storiesCount > 1 || storiesCount === 0 ? `${storiesCount} stories` : `${storiesCount} story`}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-[17px] text-gray-700">
                    {user?.bio}
                </p>
            </div>
        </section>
    )
}
export default UserInfo
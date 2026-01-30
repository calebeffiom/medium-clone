import { Calendar, ScrollText } from "lucide-react"
import { useRecoilValue } from "recoil"
import { userAtom } from "@/utils/states/userAtom"
const UserInfo = () => {
    const user = useRecoilValue(userAtom)
    const storiesCount = user?.blogsWritten.length || 0
    return (
        <section className="text-center md:text-left">
            <div className="mb-6 flex flex-col md:flex-row items-center md:items-end gap-0 md:gap-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden shadow-md shrink-0">
                    <img
                        src={user?.image}
                        alt="Profile"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="mt-4 md:mt-0 pb-2">
                    <h1 className="text-2xl md:text-3xl mb-2 md:mb-[20px] font-bold text-gray-800">
                        {user?.name}
                    </h1>
                    <div className="flex flex-wrap justify-center md:justify-start items-center text-sm text-gray-500 mt-1 gap-4 md:gap-6">
                        <div className="flex items-center">
                            <Calendar className="mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-sm md:text-[17px]">Joined {user?.createdAt}</span>
                        </div>
                        <div className="flex items-center">
                            <ScrollText className="mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-sm md:text-[17px]">{storiesCount > 1 || storiesCount === 0 ? `${storiesCount} stories` : `${storiesCount} story`}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
                <p className="leading-relaxed text-[17px]">
                    {user?.bio}
                </p>
            </div>
        </section>
    )
}
export default UserInfo
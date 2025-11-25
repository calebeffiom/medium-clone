import { Calendar, ScrollText } from "lucide-react"
const UserInfo = () => {
    return (
        <section>
            <div className="mb-6 items-end">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md">
                    <img
                        src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20creative%20writer%20and%20developer%2C%20thoughtful%20expression%2C%20neutral%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20modern%20aesthetic&width=300&height=300&seq=profile1&orientation=squarish"
                        alt="Profile"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="ml-4 mt-[20px] pb-2">
                    <h1 className="text-3xl mb-[20px] font-bold text-gray-800">
                        Alex Morgan
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
                        <div className="flex items-center">
                            <Calendar className="mr-2 text-[25px]" />
                            <span className="text-[17px] ">Joined April 2025</span>
                        </div>
                        <div className="flex items-center">
                            <ScrollText className="mr-2 text-[25px]" />
                            <span className="text-[17px]">5 stories</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
                <p className="leading-relaxed text-[17px]">
                    I'm a full-stack developer exploring the world of creative
                    writing. Sharing thoughts on technology, design, and the
                    intersection of code and creativity.
                </p>
            </div>
        </section>
    )
}
export default UserInfo
"use client"
import UserInfo from "./userInfo"
import ActiveTabs from "./tabs"
import { useState } from "react"
import StoriesTab from "./stories-tab"
import PinnedTab from "./pinned-tab"

interface UserDetailsProps {
    user: any;
}

const UserDetails = ({ user }: UserDetailsProps) => {
    const [activeTab, setActiveTab] = useState<"stories" | "pinned">("stories");

    return (
        <div className="flex-1">
            <UserInfo user={user} />

            <ActiveTabs changeTab={setActiveTab} activeTab={activeTab} />

            <div>
                {activeTab === "stories" && (
                    <StoriesTab user={user} />
                )}

                {activeTab === "pinned" && (
                    <PinnedTab user={user} />
                )}
            </div>
        </div>
    )
}
export default UserDetails

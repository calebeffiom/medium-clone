"use client"
import React from 'react'

interface ActiveTabsProps {
    changeTab: (tab: "stories" | "pinned") => void;
    activeTab: "stories" | "pinned";
}

const ActiveTabs = ({ changeTab, activeTab }: ActiveTabsProps) => {
    return (
        <div className="border-b border-gray-200 mb-6">
            <nav className='flex space-x-8'>
                <button
                    onClick={() => changeTab("stories")}
                    className={`pb-4 px-1 font-medium text-sm ${activeTab === "stories" ? "border-b-2 border-gray-800 text-gray-800" : "text-gray-500 hover:text-gray-700"} cursor-pointer whitespace-nowrap !rounded-button`}
                >
                    Stories
                </button>
                <button
                    onClick={() => changeTab("pinned")}
                    className={`pb-4 px-1 font-medium text-sm ${activeTab === "pinned" ? "border-b-2 border-gray-800 text-gray-800" : "text-gray-500 hover:text-gray-700"} cursor-pointer whitespace-nowrap !rounded-button`}
                >
                    Pinned Stories
                </button>
            </nav>
        </div>
    )
}

export default ActiveTabs

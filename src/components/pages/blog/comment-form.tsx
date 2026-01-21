"use client";

import { useState } from "react";
import Image from "next/image";

interface CommentFormProps {
    userImage?: string;
    onSubmit: (content: string) => void;
    isSubmitting?: boolean;
}

export default function CommentForm({ userImage, onSubmit, isSubmitting }: CommentFormProps) {
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (content.trim()) {
            onSubmit(content);
            setContent("");
        }
    };

    return (
        <div className="max-w-3xl mx-auto w-full mb-10">
            <div className="flex items-start gap-4 p-4 border rounded-xl bg-white shadow-sm">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 shrink-0">
                    <Image
                        src={userImage || "/images/profile.png"}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                    />
                </div>
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="What are your thoughts?"
                        className="w-full resize-none border-none focus:ring-0 text-gray-800 placeholder:text-gray-400 min-h-[100px] text-lg"
                    />
                    <div className="flex justify-end pt-2 border-t">
                        <button
                            type="submit"
                            disabled={!content.trim() || isSubmitting}
                            className={`px-4 py-2 rounded-full text-white font-medium transition-all ${!content.trim() || isSubmitting
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-green-600 hover:bg-green-700 bg-black"
                                }`}
                        >
                            {isSubmitting ? "Responding..." : "Respond"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

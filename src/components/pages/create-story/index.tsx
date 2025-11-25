"use client"
import { useRef, useState, ChangeEvent } from "react";
import {Container} from "@shared";
/**
 * Defines the structure for the story text state.
 */
interface TextState {
    title: string;
    subtitle: string;
    content: string;
}

const CreateStory = ()=> {
    const [text, setText] = useState<TextState>({
        title: "",
        subtitle: "",
        content: ""
    });
    // Refs must be typed to HTMLTextAreaElement or null initially
    const titleRef = useRef<HTMLTextAreaElement>(null);
    const subtitleRef = useRef<HTMLTextAreaElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    
    /**
     * Handles input changes and dynamically adjusts the height of the textarea.
     * @param event The change event from the textarea.
     */
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        
        // 1. Update state
        setText((prev) => ({
            ...prev,
            [name]: value,
        }));
    
        // 2. Determine the correct ref based on the input name
        let currentRef: HTMLTextAreaElement | null = null;
        if (name === "title") {
            currentRef = titleRef.current;
        } else if (name === "subtitle") {
            currentRef = subtitleRef.current;
        } else if (name === "content") {
            currentRef = contentRef.current;
        }
        
        // 3. Safely adjust height (only if the ref is pointing to an element)
        if (currentRef) {
            currentRef.style.height = "auto";
            currentRef.style.height = `${currentRef.scrollHeight}px`;
        }
    };
    
    return (
        <section className="min-h-screen">
            <Container>
                <div className="section-inner py-16">
                    <div className="max-w-3xl mx-auto space-y-8">
                        
                        {/* Title Section */}
                        <div className="bg-[#fff] rounded-xl shadow-xl border border-gray-100 p-2 transition-all duration-300 hover:shadow-2xl">
                            <textarea 
                                ref={titleRef}
                                name="title" 
                                placeholder="Story Title" 
                                value={text.title}
                                onChange={handleChange}
                                rows={1}
                                className="w-full resize-none overflow-hidden px-4 py-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight placeholder-gray-400 text-gray-900 bg-transparent outline-none focus:ring-0 transition duration-150"
                            />
                        </div>
                        
                        {/* Subtitle Section */}
                        <div className="bg-[#fff] rounded-xl shadow-lg border border-gray-100 p-2 transition-all duration-300 hover:shadow-xl">
                            <textarea 
                                ref={subtitleRef}
                                name="subtitle" 
                                placeholder="Story Subtitle" 
                                value={text.subtitle}
                                onChange={handleChange}
                                rows={1}
                                className="w-full resize-none overflow-hidden px-4 py-3 text-xl sm:text-2xl md:text-3xl font-medium leading-snug placeholder-gray-400 text-gray-700 bg-transparent outline-none focus:ring-0 transition duration-150"
                            />
                        </div>
                        
                        {/* Content Section */}
                        <div className="mt-12">
                        <div className="bg-white rounded-xl shadow-2xl p-2 border border-gray-200">
                            <textarea
                                ref={contentRef}
                                name="content"
                                placeholder="Write your story here..."
                                value={text.content}
                                onChange={handleChange}
                                rows={10}
                                className="w-full resize-none overflow-hidden px-4 py-3 text-base md:text-lg leading-relaxed placeholder-gray-400 text-gray-800 bg-transparent outline-none min-h-[350px] focus:ring-0 transition duration-150"
                            />
                        </div>
                    </div>
                        
                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-4 pt-4">
                            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-xl font-semibold border border-gray-300 shadow-md hover:bg-gray-200 transition duration-200 ease-in-out">
                                Save Draft
                            </button>
                            <button className="px-6 py-2 bg-[#2E2E2E] text-white rounded-xl font-semibold shadow-lg shadow-indigo-300 hover:bg-indigo-700 transition duration-200 ease-in-out">
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
export default CreateStory
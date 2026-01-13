import { Blog } from "@/models/blog-model/index";
import { atom } from "recoil";

export const blogsAtom = atom<Blog[]>({
    key: "blogsAtom",
    default: [],
});

const generateSlug = (str: string) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "") // Remove non-word [a-z0-9_], non-space, non-hyphen
        .replace(/[\s_-]+/g, "-") // Replace spaces/hyphens/underscores with a single hyphen
        .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};
export {generateSlug}
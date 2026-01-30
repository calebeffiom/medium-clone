import axios from "axios";

export const updateFavoriteTopics = async (topics: string[]) => {
    try {
        const response = await axios.put("/api/user", { favoriteTopics: topics });
        return response.data;
    } catch (error) {
        console.error("Error updating favorite topics:", error);
        throw error;
    }
};

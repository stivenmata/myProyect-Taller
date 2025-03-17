import SearchHistory from "../../models/SearchHistory.js";

export const clearSearchHistory = async (req, res) => {
    try {
        await SearchHistory.deleteMany({}); 
        res.status(200).json({ success: true, message: "Search history cleared" });
    } catch (error) {
        next(error);
    }
};

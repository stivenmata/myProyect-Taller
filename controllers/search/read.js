import SearchHistory from "../../models/SearchHistory.js"; 

export const getSearchHistory = async (req, res) => {
    try {
        const history = await SearchHistory.find().sort({ date: -1 }); 
        res.status(200).json({ success: true, history });
    } catch (error) {
      next(error);
    }
};

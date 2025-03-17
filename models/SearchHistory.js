import mongoose from "mongoose";

const searchHistorySchema = new mongoose.Schema({
    term: { type: String, required: true }, 
    category: { type: String, required: true }, 
    date: { type: Date, default: Date.now } 
});

const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema);
export default SearchHistory;

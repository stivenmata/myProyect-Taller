import SearchHistory from "../models/SearchHistory.js"; 

const searchLogger = (req, res, next) => {
    let searchEntry = { 
        term: req.params.name || req.params.address || req.params.id,
        category: req.baseUrl.includes("store") ? "Store" :
                  req.baseUrl.includes("product") ? "Product" :
                  req.baseUrl.includes("employee") ? "Employee" : "Other"
    };

    SearchHistory.create(searchEntry)
        .then(() => console.log("Saved Search:", searchEntry))
        .catch(error => console.error("Search error", error));

    next(); 
};

export default searchLogger;

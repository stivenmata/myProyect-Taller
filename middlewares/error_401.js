const error_401 = (error, req, res, next) => {
    if (error.status === 401 || error.message === "Unauthorized") {
        return res.status(401).json({ 
            success: false,
            message: error.message || "Unauthorized",
            response: error
        });
    }
    next(error);
};

export default error_401;

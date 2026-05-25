// POST /user

const createUser = (req, res, next)=>{
    try {
        const {name, email} = req.body;
        // Validation
        if(!name || !email ){
            const error = new Error("Name and email are required");
            error.statusCode = 400;
            return next(error);
        }
        res.status(201).json({
            success: true,
            message: `Hello, ${name}!`,
            user: {
                name, email,
            },
        })

    }catch(error){
        next(error)
    }
};

// GET /user/:id

const getUserProfile = (req, res)=> {
    const {id} = req.params;
    res.json({
        success: true,
        message: `User ${id} profile`,
    });
};

module.exports = {
    createUser,
    getUserProfile,
};
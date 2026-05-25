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

    }catch(error){

    }
}
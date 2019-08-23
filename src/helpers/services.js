import jwtDecode from "jwt-decode";

export default class HelperServices {

    static async userSignedIn(req, res, next) {
    try {

        const AccessJwtToken = req.body.token;

        if ( !AccessJwtToken ){
            res.status(401).json({
                message: 'You are not signed in.'
            })
        }
        next();
    } catch (error) {
        res.status(500).json({
        message: error,
        });
    }
    }
}
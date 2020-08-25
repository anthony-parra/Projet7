const jsonWebToken = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jsonWebToken.verify(token, 'LA_CLE_SECRETE');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User Id invalide !';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Requête invalide !')
        });
    }
};
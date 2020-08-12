const jsonWebToken = require('jsonwebtoken');

module.exports = (res, req, next) => {
    try {
        const token = req.body.authorization.split(' ')[1];
        const decodedToken = jsonWebToken.verify(token, 'LA_CLE_SECRETE');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Utilisateur introuvable';
        } else {
            next();
        }
    } catch {
        res.status(401).json({ message: 'Requête invalide !' })
    }
}
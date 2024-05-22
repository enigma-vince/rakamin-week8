// middleware / auth
const { User } = require('../models');
const bcrypt = require('bcrypt')

async function auth(req, res, next) {
    // destructuring
    const { email, password } = req.headers;
    // negate operator / bang operator
    if (!email || !password) {
        return res.status(401).json({
            message: 'Email and password are required'
        })
    }
    try {
        // block
        const user = await User.findOne({where: {email}})
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
                message: 'Invalid Credential'
            })
        }

        req.user = user;
        next()
    } catch (err) {
        // kalo misalnya error terserah
        next(err);
    }
}

module.exports = auth;
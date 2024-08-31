const bcrypt = requiere('bcrypt');
const jwt = require('jsonwebtoken');
const userRep = requiere('../repositories/userRep');

const SECRET_KEY = 'SUA_MÃE_EXTREMAMENTE_SECRETA';

class UserService {
    async register(username, password){
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userRep.createUser({ username, password: hashedPassword});
        return user;

    }
}

module.exports = new UserService();
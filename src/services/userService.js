const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRep = require('../repositories/userRep');

const SECRET_KEY = 'SUA_MÃE_EXTREMAMENTE_SECRETA';

class UserService {
    async register(username, password){
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userRep.createUser({ username, password: hashedPassword});
        return user;

    }

    async login(username, password){
        const user = await userRep.findByUserName(username);
        if(!user){
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            throw new Error('invalid password')

        }

        const token = jwt.sign({id: user.id}, SECRET_KEY,{expiresIn: '1h'});
        return token;

    }

    async getUsers(){
        return userRep.findAll();
    }

}

module.exports = new UserService();
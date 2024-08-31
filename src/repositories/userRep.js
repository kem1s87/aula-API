const User = require('../models/user');

class userRep{
    async creatUser(user){
        return await User.create(user);
    }

    async findByUserName(username){
        return await User.findOne({where:{ username }})
    }
}

module.exports = new userRep();
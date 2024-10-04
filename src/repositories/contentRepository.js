const Content = require('../models/content')

class ContentRepository{
    async createContent(content){
        return await Content.create(content);
    }

    async findAll(){
        return await Content.findAll();
    }
}

module.exports = new ContentRepository();
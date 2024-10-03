const contentRep = require ('../repositories/contentRep');
const contationsSpecialCharacters = require('../utils/validation');

class ContentService{
    async getContents(){
        return contentRep.findAll();

    }

    async createContent(text){
        if(!text){
            throw new Error('Texto em branco, calma ai não funciona');
        }
        if(text.lenght > 300){
            throw new Error('texto ta grande amigão, reduz isso dai');
        } 
        if(contationsSpecialCharacters(text)){
            throw new Error('O texto é especial')
        }


        return contentRep.createContent({text});
    }
}

module.exports = new ContentService();

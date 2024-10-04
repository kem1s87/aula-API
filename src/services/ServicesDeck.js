const contentRepository = require('../repositories/RepositoryDecks');
const containsSpecialCharacters = require('../utils/validation')

class ContentService{
    async getContents(){
        return RepositoryDecks.findAll();
    }
}
const Deck = require('../models/Decks');

class ContentRepository {
    async createDeck(content) {
        return await Deck.create(content);
    }
}

module.exports = new ContentRepository(); 

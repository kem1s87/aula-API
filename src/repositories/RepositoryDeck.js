const Deck = require('../models/Decks')

class ContentRepository{
    async createDeck(content){
        return await Deck.create(Deck);
    }
}
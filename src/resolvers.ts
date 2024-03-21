import { db } from "./_db"

export const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_, args) {
            return db.games.find(g => g.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find(a => a.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find(r => r.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter(r => r.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(a => a.author_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find(a => a.id === parent.author_id)
        },
        game(parent) {
            return db.games.find(g => g.id === parent.game_id)
        }
    }
}


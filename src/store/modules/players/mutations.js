// import Vue from "vue";
import { CREATEDECK, PUSHCARD } from "./mutation_types";

export default {
    [CREATEDECK](state, response) {
        state.deck_id = response.data.deck_id
        state.cards = response.data.cards

        // Players cards login
        let player_1 = []
        let player_2 = []
        response.data.cards.forEach((card, index) => {
            if (index % 2 === 0) {
                player_1.push(card)
            } else {
                player_2.push(card)
            }
        })

        state.player_1.cards = player_1
        state.player_2.cards = player_2
    },
    [PUSHCARD](state, response) {
        if (response === 'Player 1') {
            state.warzone.player_1.push(state.player_1.cards[0])
            state.player_1.cards.splice(0, 1)
        }
        if (response === 'Player 2') {
            state.warzone.player_2.push(state.player_2.cards[0])
            state.player_2.cards.splice(0, 1)
        }
    }
};

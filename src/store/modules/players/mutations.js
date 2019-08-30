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
        if (!state.warzone.before_push) {
            state.warzone.before_push = response
        }
        state.warzone.last_push = response
        if (response === 'Player 1') {
            state.warzone.player_1.push(state.player_1.cards[state.player_1.cards.length - 1])
            state.warzone.cards.push(state.player_1.cards[state.player_1.cards.length -1])
            state.player_1.cards.splice(0, 1)
        }
        if (response === 'Player 2') {
            state.warzone.player_2.push(state.player_2.cards[state.player_2.cards.length -1])
            state.warzone.cards.push(state.player_2.cards[state.player_2.cards.length -1])
            state.player_2.cards.splice(0, 1)
        }

        // I'm not proud for this approach

        let card_1 =  state.warzone.player_1[0] ? state.warzone.player_1[state.warzone.player_1.length -1].value : null
        let card_2 =  state.warzone.player_2[0] ? state.warzone.player_2[state.warzone.player_2.length -1].value : null

        if(card_1 === 'ACE') card_1 = 14
        if(card_1 === 'KING') card_1 = 13
        if(card_1 === 'QUEEN') card_1 = 12
        if(card_1 === 'JACK') card_1 = 11
        if(card_2 === 'ACE') card_2 = 14
        if(card_2 === 'KING') card_2 = 13
        if(card_2 === 'QUEEN') card_2 = 12
        if(card_2 === 'JACK') card_2 = 11


        const player_1 = parseInt(card_1)
        const player_2 = parseInt(card_2)

        // end

        function resetWarzone() {
            state.warzone.player_1 = []
            state.warzone.player_2 = []
            state.warzone.last_push = null
            state.warzone.before_push = null
        }

        function handleDeuce() {
            alert('Deuce')
        }

        function handleWin(player) {
            console.log('DATA: ', player)
            if (player === 1) {
                state.warzone.cards.forEach(card => {
                    state.player_1.cards.push(card)
                })
                resetWarzone()
            } if (player === 2) {
                state.warzone.cards.forEach(card => {
                    state.player_2.cards.push(card)
                })
                resetWarzone()
            }
        }

        const timeout = 3000

        if(player_1 && player_2) {
            if (player_1 > player_2) {
                setTimeout(() => {
                    alert('Player 1 wins')
                    handleWin(1)
                }, timeout)

            } else if (player_1 === player_2) {
                setTimeout(() => {
                    handleDeuce()
                }, timeout)

            } else if (player_2 > player_1) {
                setTimeout(() => {
                    alert('Player 2 wins')
                    handleWin(2)
                }, timeout)
            } else {
                alert('ERROR')
            }
        }

    }
};

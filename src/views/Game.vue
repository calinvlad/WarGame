<template>
    <div>
        <h1>Game</h1>
        <button @click="createDeck()">Create Deck</button>

        <div class="players">
            <div class="player_1">
                <h6>Player 1</h6>
                <ul v-for="(card, index) in player_1.cards" :key="card.code">
                    <li>{{index}} - {{card}}</li>
                </ul>
                <button @click="pushCard(player_1)" v-if="player_1.cards.length > 0">
                    Push Card
                </button>
            </div>
            <div class="player_2">
                <h6>Player 2</h6>
                <ul v-for="(card, index) in player_2.cards" :key="card.code">
                    <li>{{index}} - {{card}}</li>
                </ul>
                <button @click="pushCard(player_2)" v-if="player_2.cards.length > 0">
                    Push Card
                </button>
            </div>
        </div>

        <div class="warzone">
            <h6>WarZone</h6>
            <ul>
                <li>{{warzone.player_1}}</li>
                <li>{{warzone.player_2}}</li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
            }
        },
        computed: {
            player_1() {
                return this.$store.state.players.player_1
            },
            player_2() {
                return this.$store.state.players.player_2
            },
            warzone() {
                return this.$store.state.players.warzone
            }
        },
        methods: {
            createDeck() {
                this.$store.dispatch('players/createDeck')
            },
            pushCard(data) {
                this.$store.dispatch('players/pushCard', data.name)
            }

        },
        mounted() {

        }
    }
</script>
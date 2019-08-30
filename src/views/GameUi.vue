<template>
    <div class="game_box">
        <b-button href="#" variant="primary" class="mb-2" @click="createDeck">Create Deck</b-button>
        <div class="player_box row">
            <div class="player_1 col">
                <b-card-group deck>
                    <b-card
                            header="Player 1"
                            header-tag="header"
                    >
                        <div class="row align-items-center">
                            <div class="col">
                                <b-img thumbnail fluid :src="backcard" alt="Image 2" class="card-size"></b-img>
                            </div>
                            <div class="col">
                                <h5>Cards: {{player_1.cards.length}}</h5>
                                <b-button href="#" variant="primary"
                                          @click="pushCard(player_1)"
                                          v-if="player_1.cards.length > 0 && warzone.last_push !== 'Player 1' && warzone.before_push !== player_1.name">Push Card</b-button>
                            </div>
                        </div>


                    </b-card>

                </b-card-group>
            </div>
            <div class="player_2 col">
                <b-card-group deck>
                    <b-card
                            header="Player 2"
                            header-tag="header"
                    >
                        <div class="row align-items-center">
                            <div class="col">
                                <b-img thumbnail fluid :src="backcard" alt="Image 2" class="card-size"></b-img>
                            </div>
                            <div class="col">
                                <h5>Cards: {{player_2.cards.length}}</h5>
                                <b-button href="#" variant="primary"
                                          @click="pushCard(player_2)"
                                          v-if="player_2.cards.length > 0  && warzone.last_push !== 'Player 2' && warzone.before_push !== player_2.name"
                                >Push Card</b-button>
                            </div>
                        </div>
                    </b-card>

                </b-card-group>
            </div>
        </div>

        <div class="warbox">
                <b-card-group deck>
                    <b-card
                            header="War Zone"
                            header-tag="header"
                    >
                        <div class="row justify-content-center align-items-center">
                            <span v-if="warzone.player_1[0]">
                                <b-img thumbnail fluid :src="warzone.player_1[warzone.player_1.length - 1].image" class="pr-2 card-size"></b-img>
                            </span>
                            <span v-if="warzone.player_2[0]">
                                <b-img thumbnail fluid :src="warzone.player_2[warzone.player_2.length - 1].image" class="pl-2 card-size"></b-img>
                            </span>

                        </div>

                    </b-card>

                </b-card-group>
        </div>
    </div>
</template>

<style lang="sass">
.card-size
    max-width: 240px
    max-height: 324px

.game_box
    width: 1000px
    height: auto

    margin: 5% auto


</style>

<script>
    import conf from '@/plugins/conf'
    export default {
        data() {
            return {
                backcard: 'https://opengameart.org/sites/default/files/card%20back%20green.png',
                url: ''
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
            this.url = conf.baseUrl
        }
    }
</script>
import api from '../../../plugins/api';

const createDeck = async ({commit}) => {
    const response = (await api().get('deck/new/shuffle/?deck_count=1')).data;

    const getCards = (await api().get(`/deck/${response.deck_id}/draw/?count=${response.remaining}`))

    commit('CREATEDECK', getCards)
}

const pushCard = async ({commit}, payload) => {
    commit('PUSHCARD', payload)
}

export default {
    createDeck,
    pushCard

};

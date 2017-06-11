import { firebaseAction, firebaseMutations } from 'vuexfire'

const state = {
  categories: []
}

const mutations = {
  ...firebaseMutations
}
const actions = {
  loadCategories: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('categories', ref)
  })
}

export default {
  state,
  mutations,
  actions
}

import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const apiURL = 'https://thutzbooking.onrender.com'

export default createStore({
  state: {
    user: null,
    services: null,
    booking: null,
    review: null,
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setServices(state, payload) {
      state.services = payload
    },
    setBooking(state, payload) {
      state.booking = payload
    },
    setReview(state, payload) {
      state.review = payload
    },
  },
  actions: {
    // ===== Users =====
    async getUsers({ commit }) {
      try {
        let { data } = await axios.get(`${apiURL}/user`)
        commit('setUser', data)
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
      console.log(getUsers);
      
    },
    async fetchUser({ commit }, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}/user/${id}`)).data
        if (result) {
          commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // ===== Services =====
    async getServices({ commit }) {
      try {
        const { data: {results}} = await axios.get(`${apiURL}/services`)
        console.log(results);
        
        commit('setServices', results)
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async getService({ commit }, id) {
      try {
        const { data } = await axios.get(`${apiURL}/services/${id}`)
        commit('setServices', data)
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // ===== Bookings =====
    async getBookings({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}/booking`)
        commit('setBooking', data)
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async getBooking({ commit }, id) {
      try {
        const { data } = await axios.get(`${apiURL}/booking/${id}`)
        commit('setBooking', data)
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // ===== Reviews =====
    async getReviews({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}/review`)
        commit('setReview', data)
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async getReview({ commit }, id) {
      try {
        const { data } = await axios.get(`${apiURL}/review/${id}`)
        commit('setReview', data)
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // ===== LOGIN =======
    async login({ commit }, payload) {
      try {
        const { msg, result, token } = await (await axios.post(`${apiURL}/user/login`, payload)).data
        if (result) {
          toast.success(`${msg}😎`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
  },
  modules: {}
})


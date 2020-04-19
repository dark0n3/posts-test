import Vuex from 'vuex'
import Cookies from 'js-cookie'
import * as postsApi from '@/api/posts'

var cookieparser = require('cookieparser')

  const store = () => {
    return new Vuex.Store( {
      state: {
        user: {
          loggedIn: false,
          data: null,
        },
        posts: null
      },
      getters: {
        user(state) {
          return state.user;
        },
        loggedIn(state) {
          return state.user.loggedIn;
        },
        posts(state) {
          return state.posts
        }
      },
      mutations: {
        SET_LOGGED_IN(state, value) {
          state.user.loggedIn = value
        },

        /* add data Object in the future*/
        SET_USER(state, data) {
          state.user.data = data
        },
        MERGE_POSTS(state, payload) {
          state.posts = [...payload]
        }
      },

      actions: {
        setUser({commit}) {
          Cookies.set('access_token', 'logged') // saving token in cookie for server rendering
          commit("SET_LOGGED_IN", true)
        },

        async getPosts({state, commit}) {
          const result = await postsApi.getAllPosts()
          commit('MERGE_POSTS', result);
          return state.posts
        },

        /*
            This is lightweighted feature for user persistance.
            After using api for authentification e.g. Firebase or our backend we can store user tokens.
            Full example in @/helpers/index.js
        */
        async nuxtServerInit ({ dispatch }, { req }) {
          if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            const accessTokenCookie = parsed.access_token
            if (accessTokenCookie)
              await dispatch('setUser')
          }
        }
      },
  })
}

export default store

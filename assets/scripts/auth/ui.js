'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('sign up was successful')
  $('#sign-up').hide()
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  store.user = response.user
  console.log('sign in was successful')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = (data) => {
  console.log('error signing out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}

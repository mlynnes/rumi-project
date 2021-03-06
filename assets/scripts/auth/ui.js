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

const changePasswordSuccess = (response) => {
  console.log('password changed succesfully')
}

const changePasswordFailure = () => {
  console.log('error changing password')
}

const signOutSuccess = (success) => {
  console.log('successful sign out')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const signOutFailure = () => {
  console.log('error signing out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

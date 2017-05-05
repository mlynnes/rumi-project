'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('sign in was successful')
}

const signUpFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}

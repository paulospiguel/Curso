'use strict'

class User {
  get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'requered|confirmed'
    }
  }
}

module.exports = User

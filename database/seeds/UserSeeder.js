'use strict'

const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  async run() {
    const usersArray = await Factory
      .model('App/Models/User')
      .createMany(5)
    const users = await Database.table('users')
    console.log(users)
  }
}

module.exports = UserSeeder
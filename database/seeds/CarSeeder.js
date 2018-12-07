'use strict'

/*
|--------------------------------------------------------------------------
| CarSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Database = use('Database')

class CarSeeder {
  async run () {
    const usersArray = await Factory
      .model('App/Models/Car')
      .createMany(3,[
        {
            make: "ford",
            model: "ranger",
            color: "mostlyMaroon"
        },
        {
            make: "toyota",
            model: "camary",
            color: "hybridSilver"
        },
        {
            make: "jeep",
            model: "cherokee",
            color: "abismalGray"
        }

    ])
    const cars = await Database.table('cars')
    console.log(cars)
  }
}

module.exports = CarSeeder

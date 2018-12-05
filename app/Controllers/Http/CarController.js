'use strict'

const carsArray = [{ id: "0", make: 'Ford', model: 'Mustang', color: ' Blue' }]

class CarController {
    greeting({ request, response }) {

        response.send('Drive Vroom Vroom')
    }
    displayCar({ request, response }) {
        //Mike Rocks
        response.send(carsArray)
    }
    createCar({ request, response }) {
        //Still Rocks
        const body = request.post()
        // console.log (body)
        // console.log(request)
        carsArray.push(body)
        response.send(carsArray)

    }

    deleteCar({ request, response, params }) {
        const body = request.post()
        console.log(params.id)
        console.log('Hi matt')
        var newArray = carsArray.filter(element => element.id !== params.id);
            response.send(newArray)
    }

}
module.exports = CarController

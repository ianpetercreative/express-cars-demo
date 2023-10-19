const Car = require('../models/car');

const index = ( req, res ) => {
    res.render('cars/index', {
        title: "All Cars",
        cars: Car.getAll 
    })
}


module.exports = {
    index
}
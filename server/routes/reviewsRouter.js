//импорт класса роутер
const Router = require('express')
//создание объекта класса роутер
const router = new Router()
//деструктуризация контроллера products
const {getReviews} = require('../controllers/ReviewsController') 

//get роутер для products
router.get('/reviews', getReviews)
//экспорт productsrouter-a
module.exports = router
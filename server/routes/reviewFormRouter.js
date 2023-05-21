//импорт класса роутер
const Router = require('express')
//создание объекта класса роутер
const router = new Router()
//деструктуризация контроллера main
const {getReviewForm} = require('../controllers/ReviewFormController') 


//get роутер для main
router.get('/add-review', getReviewForm)

//экспорт mainrouter-a
module.exports = router

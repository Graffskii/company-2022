//импорт класса роутер
const Router = require('express')
//создание объекта класса роутер
const router = new Router()
//деструктуризация контроллера products
const {postReview} = require('../controllers/AddReviewController') 

//get роутер для products
router.get('/add-review', postReview)

router.post('/add-review', getReview)
//экспорт productsrouter-a
module.exports = router
//импорт класса роутер
const Router = require('express')
//создание объекта класса роутер
const router = new Router()
//деструктуризация контроллера products
const {getProduct} = require('../controllers/ProductController') 

//get роутер для products
router.get('/products/:id', getProduct)
//экспорт productsrouter-a
module.exports = router
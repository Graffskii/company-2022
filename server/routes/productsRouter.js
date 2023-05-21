//импорт класса роутер
const Router = require('express')
//создание объекта класса роутер
const router = new Router()
//деструктуризация контроллера products
const {getProducts} = require('../controllers/ProductsController') 

//get роутер для products
router.get('/products', getProducts)
//экспорт productsrouter-a
module.exports = router
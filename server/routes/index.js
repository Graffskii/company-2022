//импорт класса роутер
const Router = require('express')
//создание общего объекта класса роутер для файла сервера
const router = new Router()
//импорт роутера для main
const mainRouter = require('./mainRouter')

const productsRouter = require('./productsRouter')

const productRouter = require('./productRouter')

const reviewsRouter = require('./reviewsRouter')

//общий роутер для сервера
router.get('/', mainRouter)

router.get('/products', productsRouter)

router.get('/products/:id', productRouter)

// router.get('/reviews', reviewsRouter)

router.post('/add-rewiew', )
//экспорт общего роутера
module.exports = router

//импорт класса роутер
const Router = require('express')
//создание объекта класса роутер
const router = new Router()
//деструктуризация контроллера main
const {getMain} = require('../controllers/MainController') 


//get роутер для main
router.get('/', getMain)

//экспорт mainrouter-a
module.exports = router

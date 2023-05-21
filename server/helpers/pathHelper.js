//импорт метода path
const path = require('path') 

//функция для поиска файла html/ejs
// const createPath = (page) => path.resolve(__dirname, '..', '..', 'client', 'views', `${page}.html` ) 
const createPath = (page) => path.resolve(__dirname, '..', '..', 'client', 'ejs-views', `${page}.ejs` )

//экспорт функции
module.exports = createPath
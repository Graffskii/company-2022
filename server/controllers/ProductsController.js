//импорт хелпера для пути
const createPath = require('../helpers/pathHelper') 
const {products} = require('../dict/dict')

//callback для mainrouter
const getProducts = (req, res) => {
    const title = "Товары"
    res.render(createPath('products'), {
        products: products,
        title: title
    })
}

//экспорт 1-го (нескольких) callback-ов
module.exports = {
    getProducts,
}
//импорт хелпера для пути
const createPath = require('../helpers/pathHelper') 
const {products} = require('../dict/dict')

//callback для mainrouter
const getProduct = (req, res) => {
    const product = products.find((product) => {
        if (req.params.id == product.id) {
            return true
        }
    })
    const title = product.nameProduct
    res.render(createPath('product'), {
        product, title
    })
}

//экспорт 1-го (нескольких) callback-ов
module.exports = {
    getProduct,
}
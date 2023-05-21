//импорт хелпера для пути
const createPath = require('../helpers/pathHelper') 
const {reviews} = require('../dict/dict')

//callback для mainrouter
const getReviews = (req, res) => {
    const title = "Отзывы"
    res.render(createPath('reviews'), {
        reviews: reviews,
        title: title
    })
}

//экспорт 1-го (нескольких) callback-ов
module.exports = {
    getReviews,
}
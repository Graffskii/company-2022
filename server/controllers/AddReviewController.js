//импорт хелпера для пути
const createPath = require('../helpers/pathHelper') 
const {reviews} = require('../dict/dict')

//callback для mainrouter
const postReview = (req, res) => {
    const {name, review} = req.body
    const oneReview = {
        id: reviews.length + 1,
        name,
        review
    }
    reviews.push(oneReview)
    res.redirect(createPath('reviews'))
}

//экспорт 1-го (нескольких) callback-ов
module.exports = {
    postReview,
}
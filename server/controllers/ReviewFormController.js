//импорт хелпера для пути
const createPath = require('../helpers/pathHelper') 
const {reviews} = require('../dict/dict')

//callback для mainrouter
const getReviewForm = (req, res) => {
    const mainTitleName = "Interno"
    res.render(createPath('add-review'), {
        title: mainTitleName
    })
}

//экспорт 1-го (нескольких) callback-ов
module.exports = {
    getReviewForm,
    // getMainJsFile
}
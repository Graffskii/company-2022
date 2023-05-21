//импорт хелпера для пути
const createPath = require('../helpers/pathHelper') 
const {pages} = require('../dict/dict')

//callback для mainrouter
const getMain = (req, res) => {
    const mainTitleName = "Interno"
    res.render(createPath('index'), {
        title: mainTitleName
    })
}

//экспорт 1-го (нескольких) callback-ов
module.exports = {
    getMain,
    // getMainJsFile
}
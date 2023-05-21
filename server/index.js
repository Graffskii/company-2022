//express
const express = require('express')
//dotenv - для приватных переменных
require('dotenv').config()


//импорт общего роутера для сервера
const router = require('./routes/index')

//переменная порта 
const PORT = process.env.PORT

//использование express
const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))


app.use('/', router)
//типо статичные файлы для страниц
app.use('/js', express.static('../client/js'))
app.use('/img', express.static('../client/img'))
app.use('/css', express.static('../client/css'))






//прослушка порта
const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server is start1ng on port ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

//старт сервера
start()



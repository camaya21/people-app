const mongoose = require('mongoose')

const PeopleSchema = new mongoose.Schema({
    name: {type: String, require: true},
    image: String,
    title: String
}, {timeStamps: true})

const People = mongoose.model("People", PeopleSchema)

module.exports = People
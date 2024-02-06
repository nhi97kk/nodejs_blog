const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater')
    
    mongoose.plugin(slug)

const Course = new Schema({
    name: {type: String, maxLenght: 255, required: true},
    desc: {type: String, maxLength: 600},
    img: {type: String, maxLenght: 255},
    videoId: {type: String, required: true},
    slug: { type: String, slug: "name", unique: true}
},{
    timestamps: true
})

module.exports = mongoose.model('Course', Course)
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to MongoDB')
mongoose.connect(url).then(result => {
    console.log('Connected to Mongodb')
}
).catch((error) => {
    console.log('error connectiong to MongoDB: ', error.message)
})

const noteSchema = new mongoose.Schema({
    content: String,
    description: String,
    link: String,
    // important: Boolean,
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})



module.exports = mongoose.model('Note', noteSchema)
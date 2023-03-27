const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = process.env.MONGO_URL;

console.log('Connecting to ', url);

mongoose.connect(url)
.then(res => {
    console.log('Connected.');
}).catch(error => {
    console.log(error);
})

const noteSchema = new mongoose.Schema({
    content: String,
    important:Boolean,
});

noteSchema.set('toJSON',{
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Note', noteSchema);
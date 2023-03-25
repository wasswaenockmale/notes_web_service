const mongoose = require('mongoose');

if(process.argv.length < 3){
    console.log("Give password as an argument");
    process.exit(1)
}

const password = process.argv[2];

const url = `mongodb+srv://wasswaenockmale:${password}@cluster0.7plltgb.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(url,).then(()=>console.log('connected')).catch(e => console.log("There is an error"));

const noteSchema = new mongoose.Schema({
    content: String, 
    important: Boolean
});

const Note = mongoose.model('Note', noteSchema);

// This helps generate new notes 
// const note = new Note({
//     content: 'Mongoose makes things easy',
//     important: true,
// });

Note.find({important: true}).then(res => {
    res.forEach(note => {
        console.log(note);
    });

    mongoose.connection.close();
})

// note.save().then(result => {
//     console.log('note saved');
//     mongoose.connection.close();
// })
const mongoose= require (mongoose);
const userSchema= new mongoose.Schema({
    full_name: {type: String,
    required: true},
    Date_Of_Birth: {type: Number,
    },
    password: {type: Number,
    required: true}
})

module.exports= mongoose.model('user', userSchema)
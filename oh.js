const express= require('express');
const app = express();
const mongodb = require('mongodb').MongoClient
const auth = require('./middleware/auth')
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: 'Successful'})
})

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("weather-db");
    dbo.collection("node").insertOne(data, err => {
        if (err) throw err;
        console.log("documents inserted");
        db.close();
    });
});

app.get('/', ()=>{
    res.json({message:'successful'})
})

app.post('/api/loginUser', async ()=>{
try{
 const loginDetails= await user.save();

 app.post('/register', ()=>{
    try{
        const {full_Name, Date_Of_Birth, password}= req.body;
        if(!(full_Name&& Date_Of_Birth && password)){
            res.status(400).send({message:'good stuff here'})
        }
        const oldUser= await user.findOne({full_Name});
        if(oldUser){
            return res.status(400).send({message:'user already exist'})
        }
    } 
    encryptedPassword= await bcrypt.hash(password, 10);
    const user= await user.create({
        full_Name,
        Date_Of_Birth,
        password: encryptedPassword
    });
    const token = jwt.sign({
        user_id:user_id, email,
    })
    expireIn: '2h'
 })
 user.token= token;

 res.status(201).json(user);
}
catch(e){
console.log('error')
}
})
function connectToMongo(data){

    
}


app.listen(process.env.PORT || 8000, () => {
    console.log('listening on port 8082');
 })

 app.post('/login', async(req, res)=>{
try{
    const {full_name, password}= req.body;
if(!(full_name&& password)){
    res.status(500).send('Input all your details')
}
const user= await user.findOne({full_name}
)
if(user&& (await bcrypt.compare(password, user.password))){
    const token = jwt.sign(
        {user_id:user._id, full_name}
        process.env.TOKEN_KEY,
    )
    expiresIn: '2h',

    }
    user.token= token;
    
    res.status(400).send({
        message: 'access granted'}
        catch(error)
        console.log(err);
    })

    }

 })

 module.exports= app;
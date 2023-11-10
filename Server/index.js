import exp from 'express';
import mon from 'mongoose'
import cors from 'cors';
import jwt from 'jsonwebtoken'


const app = exp()
app.use(exp.json())

const Secret = 'hemanthkr';
app.use(cors())

mon.connect('mongodb://localhost:27017',{
    dbName : "Mern1",
    useUnifiedTopology : true
}).then(()=>{
    console.log("DB Connected !")
})

const Schema = new mon.Schema({
    name : String,
    email : String,
    pass : String
})

const User = mon.model("User1", Schema)


app.post('/signup', async (req,res)=>{
    const info = req.body;

    const existingUser = User.findOne({email:info.email})

    if (existingUser){
        res.json({message : "User already exist"})
    } else {
        const newU = await User.create({
            name : req.body.name,
            email: req.body.email,
            pass : req.body.pass
        }).then(()=>{
            console.log("User created !")
            res.json({status:'ok'})
        })
    
        const token = jwt.sign({newU},Secret)
        console.log("Token : ")
        console.log(token)
    }
    


    // const e = req.body.email
    // const exist = User.findOne({email:e})

    // if (exist){
    //     console.log("Error already exists")
    // } else {
    

    // if (newU){
        //         console.log("User created !")
        //     } else {
        //         console.log("Error while creating user !")
        // }
    }
)


app.post('/login', (req,res)=>{
    const email = req.body.email
    const pass = req.body.pass
    
    const UserExist = User.findOne({email:email})
    
    if (UserExist){

    }


})

app.listen(5000, ()=>{
    console.log("Sever started !")
})


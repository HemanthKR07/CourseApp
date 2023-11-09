import exp from 'express';
import mon from 'mongoose'
import cors from 'cors';
import bodyParser from 'body-parser';

const app = exp()

app.use(exp.json())
app.use(cors())

mon.connect('mongodb://localhost:27017/Mern').then(()=>{
    console.log("DB Connected !")
})

const Schema = new mon.Schema({
    name : String,
    email : String,
    pass : String
}, {collection: "UserD"})

const User = mon.model("User1", Schema)


app.post('/signup', (req,res)=>{
    let {nam,mail,passw} = req.body;

    const exist = User.findOne({email:mail})
    // console.log({mail})
    console.log(passw)
    if (exist){
        console.log("Error already exists")
    } else {
        User.create({
            name : nam,
            email: mail,
            pass : passw
        }).then(()=>{
            console.log("User created !")
        }).catch((err)=>{
            console.log(err);
        })
        
    }
})

app.listen(5000, ()=>{
    console.log("Sever started !")
})


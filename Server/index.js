import exp from 'express';
import mon from 'mongoose'
import cors from 'cors';

const app = exp()

app.use(exp.urlencoded({extended:true}))
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
    const {name,email,pass} = req.body;

    const exist = User.findOne({email:email})

    if (exist){
        res.send("Error")
    } else {
        User.create({
            name : name,
            email: email,
            pass : pass
        }).then(()=>{
            console.log("User created !")
        })
    }
})

app.listen(3000, ()=>{
    console.log("Sever started !")
})


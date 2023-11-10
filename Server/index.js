import exp from 'express';
import mon from 'mongoose'
import cors from 'cors';

const app = exp()
app.use(exp.json())

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
    const e = req.body.email
    const exist = User.findOne({email:e})

    if (exist){
        console.log("Error already exists")
    } else {
        const newU = await User.create({
            name : req.body.name,
            email: req.body.email,
            pass : req.body.pass
        })

        if (newU){
                console.log("User created !")
            } else {
                console.log("Error while creating user !")
        }
    }
})

app.listen(5000, ()=>{
    console.log("Sever started !")
})


import exp from 'express';
import mon from 'mongoose'
import cors from 'cors';
import jwt from 'jsonwebtoken'


const app = exp()
app.use(exp.json())

const Secret = 'yoUr_s3CrEt';
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

// There is still problem with Signing In process, 
// the server is not checking in the database


async function authentication (req,res,next){
    const token = req.headers.Authorization.split(" ")[1]
    const data = jwt.verify(token,Secret)
    console.log(data)
    next();
}


app.post('/signup', async (req,res)=>{
    
    const existingUser = User.findOne({email:req.body.email})

    if (existingUser === false){
        res.status(403).json({message : "User already exist"})
        console.log("User already exist")
    } else {
        const newU = await User.create({
            name : req.body.name,
            email: req.body.email,
            pass : req.body.pass
        }).then(()=>{
            console.log("User created !")
            res.status(200).json({message : "User created"})
        })
        
        const token = jwt.sign({newU},Secret,{expiresIn:'1h'})
        console.log(token)
        req.headers.Authorization = + ' ' + token;
    }
}
)

// There is still problem with Signing In process, 
// the server is not checking in the database


app.post('/login', (req,res)=>{
    const email = req.body.email
    const pass = req.body.pass
    
    const UserExist = User.findOne({email:email})
    
    if (!UserExist){
        const token = jwt.sign({email,pass},Secret, {expiresIn:'1h'});
        console.log("User logged in")
        console.log(token)
        req.headers.Authorization = + ' ' + token;
    } else {
        res.status(403).json({message: "Invalid credentials !"})
        console.log("Invalid User credentials !")
    } 
})

app.get('/getcourses', authentication, (req,res)=>{
        console.log("Render everthing");
        
})

app.get('/getmycourses', authentication, (req,res)=>{})

app.post('/createcourse', authentication, (req,res)=>{
    console.log("came back !")
})


app.listen(5000, ()=>{
    console.log("Sever started !")
})


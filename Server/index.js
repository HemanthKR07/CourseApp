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


// async function authentication (req,res,next){
//     const token = req.headers("Authorization").split(" ")[1]
//     const data = jwt.verify(token,Secret)
//     console.log(data)
//     next();
// }

// function UserAuthentication(req,res,next){
//     if (req.headers("Authorization")){
//         condition = true;
//     }
// }

app.post('/', async (req,res)=>{
    console.log("Requested !")
    const existingUser = await User.findOne({email:req.body.email})
    
    if (existingUser){
        res.status(403).json({message : "User already exist"})
        console.log("User already exist")
    } else {
        const newU = await User.create({
            name : req.body.name,
            email: req.body.email,
            pass : req.body.pass
        })
       
        const token = jwt.sign({newU},Secret,{expiresIn:'1h'})
       
        console.log(token)

        res.setHeader('Authorization', `Bearer ${token}`);
        // if (typeof Storage !== 'undefined'){
        //     localStorage.setItem("Token", token)
        //     console.log("Data saved in storage")
        // } else {
        //     console.log("Your browser doesnt support LocalStorage")
        // }
        console.log("Updated Header")
        res.status(200).json({message:"Success"})
    }
})


app.post('/login', async (req,res)=>{
    const email = req.body.email
    const pass = req.body.pass
    
    const UserExist = await User.findOne({email:email,pass:pass})
    
    if (UserExist){
        const token = jwt.sign({email,pass},Secret, {expiresIn:'1h'});
        console.log("User logged in")
        console.log(token)
        res.setHeader('Authorization', `Bearer ${token}`)

        if (typeof(Storage) !== 'undefined'){
            localStorage.setItem("Token", token)
            console.log("Data saved in storage")
} else {
    console.log("Your browser doesnt support LocalStorage")
}

        res.status(200).json({message:"Success"})
    } else {
        res.status(403).json({message: "Invalid credentials !"})
        console.log("Invalid User credentials !")
    } 
})

app.get('/help',(req,res)=>{
    console.log("From Help")
    res.status(200).json({msg:"Success"})
})




// app.get('/', UserAuthentication, (req,res)=>{
        
// })



// app.get('/getcourses', authentication, (req,res)=>{
//         console.log("Render everthing");
        
// })

// app.get('/getmycourses', authentication, (req,res)=>{})

// app.post('/createcourse', authentication, (req,res)=>{
//     console.log("came back !")
// })


app.listen(5000, ()=>{
    console.log("Sever started !")
})


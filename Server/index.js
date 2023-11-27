import exp from 'express';
import mon from 'mongoose'
import cors from 'cors';
import nodemailer from 'nodemailer';
import multer, { diskStorage } from 'multer';
import path from 'path';

const app = exp()
app.use(exp.json())

const Secret = 'yoUr_s3CrEt';
app.use(cors())

mon.connect('mongodb://localhost:27017',{
    dbName : "Coursera",
    useUnifiedTopology : true
}).then(()=>{
    console.log("DB Connected !")
})

const Schema1 = new mon.Schema({
    name : String,
    email : String,
})

const Schema2 = new mon.Schema({
    id : Number,
    title : String,
    field : String,
    hours : Number,
    price : Number,
    image : {
        data:Buffer,
        contentType:String
    },
    launch : Boolean,
    buy : Boolean
})
const Model = mon.model("UserData", Schema1)
const Courses = mon.model("Courses", Schema2)


const storage = multer.diskStorage({
        destination : (req,file,cb)=>{
                cb(null,'../client/src/images')
        },
        filename : (req, file, cb)=>{
                cb(null, file.filename + " "+ Date.now() + path.extname(file.originalname))
        }
})

const upload = multer({
    storage : storage
})



app.post('/coursecreate', upload.single('image1'), (req,res)=>{
    const id = req.headers["id"];
    const title = req.headers["title"];
    const field = req.headers["field"];
    const hours = req.headers["hours"];
    const price = req.headers["price"];
    const image = req.file.filename;
    const resp = Courses.create({
        id : id,
    title : title,
    field : field,
    hours : hours,
    price : price,
    image : image,
    launch : true,
    buy : false
    })
    if (resp){
        res.status(200).json({msg:"Success"})
        console.log("Course created - Server")
    } else {
        res.status(404).json({msg:"Failed"})
        console.log("Course wasn't created - Server")
    }
})

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


// This api is used to check is there's any user with that mail id.
app.post('/', async (req,res)=>{
    console.log("Requested !")
    const existingUser = await Model.findOne({email:req.headers.email})
    
    if (existingUser){
        res.status(403).json({message : "User already exist"})
        console.log("User already exist")
    } else {
        console.log("In Else Block")
        res.status(200).json({message:"Proceed !"})
    }
})

app.get('/createUser', async (req,res)=>{
        const newU = await Model.create({
            name : req.headers["userName"],
            email: req.headers.email,
            pass : req.headers.pass
        })
        if (newU){
            res.status(200).json({message:"Success"})
            console.log("User created - Server")
        } else {
            res.status(403).json({message:"Failed"})
            console.log("Failed to create User - Server")
        }
})


app.post('/login', async (req,res)=>{
    const email = req.headers["email"];
    const passw = req.headers["pass"];
    
    try {
        const UserExist = await Model.findOne({email:email})

    if (UserExist){
        console.log(UserExist.pass)
        if (UserExist.pass == passw){
            console.log("User exists - Signing In")
            res.status(200).json({message : "Exists", comp:"C1"})   
        } else {
            console.log("Wrong password !")
            res.status(401).json({message:"Wrond password", comp:"C2"})
        }
    } else {
        console.log("User doesn't exist - Rendering Sign up page")
        res.status(404).json({message:"User Doesn't exist", comp:"C3"})
    }
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal error ")   
    }

    // if (UserExist){
    //     const token = jwt.sign({email,pass},Secret, {expiresIn:'1h'});
    //     console.log("User logged in")
    //     console.log(token)
    //     res.setHeader('Authorization', `Bearer ${token}`)

        // if (typeof(Storage) !== 'undefined'){
        //     localStorage.setItem("Token", token)
        //     console.log("Data saved in storage")
// } else {
//     console.log("Your browser doesnt support LocalStorage")
// }

//         res.status(200).json({message:"Success"})
//     } else {
//         res.status(403).json({message: "Invalid credentials !"})
//         console.log("Invalid User credentials !")
//     } 
})


app.post('/verify',(req,res)=>{
        const email = req.headers["email"]
        console.log(email)

        async function sendMail() {
                function otp() {
                        console.log("OTP Generating")
                        let num = Math.floor(Math.random() * 1000000, 0);
                        return num.toString().padStart(6, "0");
                }

                const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "krh7799@gmail.com",
                    pass: "qrpadvfixkpzahbp",
                },
                });
                const numb = otp();
                const mailOptions = {
                from: {
                    name: "OTP VERIFICATION",
                    address: "krh7799@gmail.com",
                },
                to: email,
                subject: "OTP Verification",
                text: `Do not share your OTP ${numb} with anyone, they can steal your data.`,
                };

                try {
                const result = await transporter.sendMail(mailOptions);
                console.log("Mail sent successfully !");
                res.status(200).json({otp:numb,message:"OTP Sent"})
            } catch (error) {
                console.log(`Error Bhai : ${error}`);
                res.status(404).json({message:"OTP Failed"})
                }
            }
            sendMail()
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
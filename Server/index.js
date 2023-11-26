import exp from 'express';
import mon from 'mongoose'
import cors from 'cors';
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer';

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

const Schema1 = new mon.Schema({
    name : String,
    email : String,
    pass : String
})

// const Schema2 = new mon.Schema({
//     id : number,
//     title : String,
//     field : String,
//     hours : number,
//     price : number,
// })

const User = mon.model("User1", Schema1)

// const Courses = mon.model("Courses", Schema2)



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


// This api is used to check is there's any in user with that mail id.
app.post('/', async (req,res)=>{
    console.log("Requested !")
    const existingUser = await User.findOne({email:req.headers.email})
    
    if (existingUser){
        res.status(403).json({message : "User already exist"})
        console.log("User already exist")
    } else {
        console.log("In Else Block")
        res.status(200).json({message:"Proceed !"})
    }
})
// const newU = await User.create({
//     name : req.headers.UserName,
//     email: req.headers.email,
//     pass : req.headers.pass
// })

// const token = jwt.sign({newU},Secret,{expiresIn:'1h'})

// console.log(token)

// res.setHeader('Authorization', `Bearer ${token}`);
// console.log("Updated Header")
// res.status(200).json({message:"Success"})

// app.post('/login', async (req,res)=>{
//     const email = req.body.email
//     const pass = req.body.pass
    
//     const UserExist = await User.findOne({email:email,pass:pass})
    
//     if (UserExist){
//         const token = jwt.sign({email,pass},Secret, {expiresIn:'1h'});
//         console.log("User logged in")
//         console.log(token)
//         res.setHeader('Authorization', `Bearer ${token}`)

//         if (typeof(Storage) !== 'undefined'){
//             localStorage.setItem("Token", token)
//             console.log("Data saved in storage")
// } else {
//     console.log("Your browser doesnt support LocalStorage")
// }

//         res.status(200).json({message:"Success"})
//     } else {
//         res.status(403).json({message: "Invalid credentials !"})
//         console.log("Invalid User credentials !")
//     } 
// })


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
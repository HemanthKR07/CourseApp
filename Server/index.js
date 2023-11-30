import exp from 'express';
import mon from 'mongoose'
import cors from 'cors';
import nodemailer from 'nodemailer';
import multer from 'multer';
import jwt from 'jsonwebtoken';

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
    pass : String,
})

const Schema2 = new mon.Schema({
    userMail : String,
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


const userAuth = (req,res,next)=>{
        // const {email, pass} = req.headers;
        // const user = Model.find(u => u.email == email && u.pass == pass)

        // if (user){
        //     req.user = user;
        //     next();
        // } else {
        //     res.status(404).json({message:"User Authentication Failed !!"})
        // }

        const token = req.headers.token
    }



app.post('/', async (req,res)=>{
    const {email} = req.headers;
    const passw = req.headers["pass"]

    // console.log(email,passw);
    if (email.includes("@")){
        try {
            const UserExist = await Model.findOne({email:email})
            if (UserExist){
                console.log("User exist")
                const password = UserExist.pass;
                const uname = UserExist.name;
                const user = {uname, email, password}
                if (password == passw){
                    console.log("User exists - Signing In")
                    const token = jwt.sign({user},Secret,{expiresIn:'1hr'})
                    res.setHeader("Authorization", `Bearer ${token}`)
                    res.status(200).json({token:token,message : "Success"})   
                } else {
                    console.log("Wrong password !")
                    res.status(401).json({message:"Wrond password"})
                }
            } else {
                    console.log("User doesn't exist - Rendering Sign up page")
                    res.status(404).json({message:"User Doesn't exist"})
                }
        } catch (error) {
                        console.log(error)
                        res.status(500).json("Internal error ")   
            }
    } else {
        res.status(400).json({message:"Invalid Email"})
    }
})

app.post('/resetpass', async (req,res)=>{
    const {email} = req.headers;
    if (email.includes("@")){
        try {
            const UserExist = await Model.findOne({email:email})
            if (UserExist){
                res.status(200).json({message : "Success"})
            } else {
                res.status(404).json({message:"User not found"})
            }
        } catch(error){
                console.log("Error in reset pass  : ", error)
        }
    }
})

// This api is used to check is there's any user with that mail id.
app.post('/signup', async (req,res)=>{
    console.log("Requested !")
    const email = req.headers["email"];
    
    if(email.includes("@")){
        const existingUser = await Model.findOne({email:email})
        if (existingUser){
            res.status(403).json({message : "User already exist"})
            console.log("User already exist")
        } else {
            res.status(200).json({message:" "})
        }
    } else {
        res.status(401).json({message:"Invalid email"})
    }    
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
                console.log(numb)
                const mailOptions = {
                from: {
                    name: "COURSE APP",
                    address: "krh7799@gmail.com",
                },
                to: email,
                subject: "OTP Verification",
                text: `Do not share your OTP ${numb} with anyone, from COURSERA`,
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


app.post('/createUser', async (req,res)=>{
    const newU = await Model.create({
        name : req.headers.userName,
        email: req.headers.email,
        pass : req.headers.pass
    })
    if (newU){
        console.log("User created - Server")
        const token = jwt.sign({newU},Secret,{expiresIn:'1hr'})
        res.setHeader("Authorization",`Bearer ${token}`)
        console.log(token)
        res.status(200).json({token:token,message:"Success"})
    } else {
        res.status(403).json({message:"Failed"})
        console.log("Failed to create User - Server")
    }
})
    
const storage = multer.diskStorage({
    destination : 'src/CourseImages',
    filename: (req, file, cb)=>{
            cb(null, file.originalname)
    }
})

const upload = multer({
    storage : storage
})


app.post('/coursecreate', userAuth, upload.single('image1'), (req,res)=>{

    // const {id,title,field,hours,price,image} = req.headers
    // const course = req.headers;
    // const user = req.user;

    console.log(res.header.Authorization)


    // console.log(course)
    // console.log(user)
    // if (user){
    //     user.pu
    // }

    // const resp = Courses.create({
    // id : id,
    // title : title,
    // field : field,
    // hours : hours,
    // price : price,
    // image : image,
    // launch : true,
    // buy : false
    // })
    // if (resp){
    //     res.status(200).json({msg:"Success"})
    //     console.log("Course created - Server")
    // } else {
    //     res.status(404).json({msg:"Failed"})
    //     console.log("Course wasn't created - Server")
    // }
})


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
// })

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
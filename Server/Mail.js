import nodemailer from 'nodemailer';

async function sendMail(){
    
    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth: {
          user: "krh7799@gmail.com",
          pass: "qrpadvfixkpzahbp",
        },
      });
      
      const mailOptions =  {
          from: {
            name:"OTP VERIFICATION",
            address:"coursera@verifcation.com"},
          to: "hemanthkr0514@gmail.com", 
          subject: "OTP Verification", 
          text: "Do not share your OTP (372505) with anyone, they can steal your data.",
          
    }

    try {
    const result = transporter.sendMail(mailOptions)
    console.log("Mail sent successfully !")    
    } catch (error) {
        console.log(`Error Bhai : ${error}`)
    }

}

// sendMail()

export default sendMail;
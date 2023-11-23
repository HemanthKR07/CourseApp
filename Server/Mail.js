import nodemailer from 'nodemailer';

async function sendMail(){
    
  function otp(){
    let num = Math.floor((Math.random() * 1000000),0); 
    return num.toString().padStart(6,'0');
  } 
    
    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth: {
          user: "krh7799@gmail.com",
          pass: "qrpadvfixkpzahbp",
        },
      });
      
      const numb = otp();
      const mailOptions =  {
          from: {
            name:"OTP VERIFICATION",
            address:"coursera@verifcation.com"},
          to: "hemanthkr0514@gmail.com", 
          subject: "OTP Verification", 
          text: `Do not share your OTP ${numb} with anyone, they can steal your data.`,
          
    }

    try {
    const result = transporter.sendMail(mailOptions)
    console.log("Mail sent successfully !")
    callback(null,"Mail sent successfully !")

  } catch (error) {
    
    console.log(`Error Bhai : ${error}`)
    callback(error,"Failed to send Mail !")
    }

}

sendMail()

export default sendMail;
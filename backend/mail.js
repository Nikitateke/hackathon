const mail = require('nodemailer')

async function sendEmail(to,subject,body,callback){

const transport = mail.createTransport({
    service:'gmail',
    auth:{
        user: 'nikita789teke@gmail.com',
        pass:'hatbsipbpqrzzwoo'
    }
})
await transport.sendMail({
    from:'nikita789teke@gmail.com',
    to,
    subject,
    html: body
})
    callback()
}
module.exports = {sendEmail}
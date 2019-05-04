const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'viny07.cool@gmail.com',
        subject: 'Welcome to the App',
        text: `Welcome to the app, ${name}. Let me know how u get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'viny07.cool@gmail.com',
        subject: 'See you soon',
        text: `Goodbye, ${name}. Hope to see u soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
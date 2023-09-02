var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.project_img_id) {
            const imagen = cloudinary.url(novedades.project_img_id, {
                widht: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });
    res.json(novedades);
});




router.post('/contacto', async (req, res) => {
    const mail = {
        to: "bkcoury@gmail.com",
        subject: 'Contacto web',
        html: `${req.body.name} has reached out about an awesome idea he has for a mod, and wants to let you know about it, here is waht he wrote: ${req.body.message} <br> His/Her Discord name tag is: ${req.body.discord} <br> And the steam user provided is: ${req.body.steam}`

    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Message Sent'
    });

});

module.exports = router;
var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
var destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.project_img_id) {
            var imagen = cloudinary.image(novedad.project_img_id, {
                width: 100,
                height: 100,
                crop: 'pad'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });
    res.render('admin/novedades', {
        layout: 'admin/layout',
        user_name: req.session.name_user,
        novedades
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});

router.post('/agregar', async (req, res, next) => {
    try {
        var project_img_id = '';
        //console.log(req.body.image);
        if (req.files && Object.keys(req.files).lenght > 0) {
            imagen = req.files.imagen;
            project_img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.project_description != "" && req.body.project_members != "" && req.body.project_status != "") {
            await novedadesModel.insertNovedad({
                ...req.body,
                project_img_id
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Please complete all the fields'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'The new project is not posted'
        })
    }
})

router.get('/delete/:project_id', async (req, res, next) => {
    var project_id = req.params.project_id;

    let novedad = await novedadesModel.getNovedadById(project_id);
    if (novedad.project_img_id) {
        await (destroy (novedad.project_img_id));
    }
    
    await novedadesModel.deleteNovedadesById(project_id);
    res.redirect('/admin/novedades');
});

router.get('/modify/:project_id', async (req, res, next) => {
    var project_id = req.params.project_id;
    //console.log(req.params.project_id);
    var novedad = await novedadesModel.getNovedadById(project_id);


    res.render('admin/modify', {
        layout: 'admin/layout',
        novedad
    })
});

router.post('/modify', async (req, res, next) => {
    try {

        let project_img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            project_img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).lenght > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy (req.body.img_original));
        }


        var obj = {
            project_description: req.body.project_description,
            project_members: req.body.project_members,
            project_status: req.body.project_status,
            project_img_id
        }
        //console.log(obj)

        await novedadesModel.modifyNovedadesById(obj, req.body.project_id);
        res.redirect('/admin/novedades');

    } catch (error) {
        console.log(error)
        res.render('admin/modify', {
            layouot: 'admin/layout',
            error: true,
            message: 'The Project couldnt be modified'
        })
    }
})



module.exports = router;
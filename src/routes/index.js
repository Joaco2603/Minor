const { Router } = require('express'); //Se llama a express

const path = require('path'); //Se declara el uso de rutas
const { unlink } = require('fs-extra'); //Se linkea fs para funciones adicionales de simbologia y demás
const router = Router(); //Se declara el router

const User = require('../models/User');

const {request,response} = require('express');

// Models
const Image = require('../models/Image'); //Se llama al modelo de Imagen

router.post('/', async (req=request, res=response) => { 

    const {nombre,correo,password} = req.body;
    console.log(req.body)
    const usuario = new User({nombre,correo,password});

    await usuario.save

    res.json({
        usuario
    })
});

router.post('/sign',async(req,res)=>{
    const {correo,password} = req.body;
    console.log(correo)
    const usuario = await User.find({ correo,password });

    res.json({
        usuario
    })
})

router.get('/tienda', async (req, res) => { //Se manda una reques y una response
    const images = await Image.find(); //Busca la imagen
    res.render('index', { images });
});

router.get('/upload', (req, res) => {  //La ruta para subir la imagen
    res.render('upload');
});

router.post('/upload', async (req, res) => {
    const image = new Image(); //Se llama el modelo de imagen
    image.title = req.body.title; //Se guarda el titulo para enviar a la base de datos 
    image.description = req.body.description; //Se guarda la descripcion para enviar a la base de datos 
    image.filename = req.file.filename; //Se guarda el nombre del archivo para enviar a la base de datos 
    image.path = '/img/uploads/' + req.file.filename; //Se guarda la ruta del archivo para enviar a la base de datos 
    image.originalname = req.file.originalname;   //Se guarda el nombre original para enviar a la base de datos 
    image.mimetype = req.file.mimetype; //Se guarda las caracteristicas para enviar a la base de datos 
    image.size = req.file.size; 


    //Ademas de que la consola guarda todo

    await image.save();
    res.redirect('/');
});

//La ruta para el prefil de la persona
router.get('/image/:id', async (req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    res.render('profile', { image });
});

//La ruta para borrar imagen 
router.get('/image/:id/delete', async (req, res) => {
    const { id } = req.params; 
    const imageDeleted = await Image.findByIdAndDelete(id); //Encontrar segun el ID para eliminar
    await unlink(path.resolve('./src/public' + imageDeleted.path));  //Se elimina también por ruta
    res.redirect('/');
});

module.exports = router;
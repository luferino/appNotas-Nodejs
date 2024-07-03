const {Router} = require('express');

const Note = require('../models/Notes');

const { isAuthenticated } =require('../helpers/auth');

const router = Router();

//Listar todas las notas
router.get('/notes', isAuthenticated, async(req, res) =>{
    const notes = await Note.find({user: req.user.id}).sort({date: 'desc'}).lean();
    res.render('notes/all-notes',{notes});
});
//Ruta para crear notas 
router.get('/notes/add',isAuthenticated, (req, res) =>{
    res.render('notes/new-note');
});
//Ruta para enviar la nota creada
router.post('/notes/new-notes',isAuthenticated, async(req, res)=>{
    const {title, description} = req.body;
    const errors = [];
    if(!title){
        errors.push({text:"Please write a Title"});
    } 
    if(!description){
        errors.push({text:"Please write a Description"});
    }
    if(errors.length>0){
        res.render('notes/new-note',{
            errors,
            title,
            description
        });
    }else{
        const newNote = new Note({title, description});
        newNote.user = req.user.id;
        await newNote.save();
        req.flash('success_msg', 'Note Added Success');
        res.redirect('/notes');
    }
});
//Ruta para editar la ruta creada
router.get('/notes/edit/:id', isAuthenticated, async(req, res)=>{
    const note =await Note.findById(req.params.id).lean();
    res.render('notes/edit-note', {note});
});
//Ruta para enviar la actualizacion
router.put('/notes/edit-note/:id',isAuthenticated, async(req, res)=>{
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Note Updated Successfully');
    res.redirect('/notes');
});
//para eliminar
router.delete('/notes/delete/:id',isAuthenticated, async(req, res)=>{
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes');
});

module.exports = router;
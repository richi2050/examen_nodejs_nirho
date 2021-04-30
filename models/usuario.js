const mongoose = require('mongoose');
const usuarioSchema = new mongoose.Schema({
    nombre: { type:String,maxlength:50, unique:true, required:true},
    email: { type:String, maxlength:50, unique:true, required:true},
    password: { type:String, maxlength:64, required:true},
	createdAt: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('usuario',usuarioSchema);
module.exports = Usuario;
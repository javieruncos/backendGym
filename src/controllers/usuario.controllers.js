import { validationResult } from "express-validator";
import Usuario from "../models/usuarios";
import bcrypt from "bcryptjs"

export const listaUsuario = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json({ usuarios });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se puso obtener la lista de usuarios",
    });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errores: errors.array(),
      });
    }


    const {email,password} = req.body;

    let usuario = await Usuario.findOne({email});
    if(usuario){
      return res.status(400).json({
        mensaje:"ya existe un usuario con el correo enviado"
      })
    }
    

    usuario = new Usuario(req.body)
   
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password,salt)

    await usuario.save();

    res.status(201).json({
      mensaje:"usuario creado",
      usuario:usuario.nombre,
      aui:usuario._id
    })
    
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar  crear el usuario",
    });
  }
};


export const login = async(req,res)=>{
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors:errors.array(),
      })
    }

    const {email,password} = req.body;
    let usuario = await Usuario.findOne({email})
    if(!usuario){
      return res.status(400).json({
        mensaje:"Correo o password incorrectos"
      })
    }

    const passwordValido = bcrypt.compareSync(password,usuario.password);

    if(!passwordValido){
      return res.status(400).json({
        mensaje:"Correo o password incorrectos"
      })
    }

    res.status(200).json({
      mensaje:"el usuario existe",
      uid:usuario._id,
      nombre:usuario.nombre,
    })

    
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje:"el usuario no existe"
    })
  }
}
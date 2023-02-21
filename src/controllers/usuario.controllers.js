import { validationResult } from "express-validator";
import Usuario from "../models/usuarios";

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

    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({
      mensaje: "el usuario fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar  crear el usuario",
    });
  }
};

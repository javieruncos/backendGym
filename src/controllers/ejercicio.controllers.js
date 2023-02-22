import { validationResult } from "express-validator";
import Ejercicio from "../models/producto";

export const listaEjercicios = async (req, res) => {
  try {
    const ejercicios = await Ejercicio.find();
    res.status(200).json([ejercicios]);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar listar los ejercicios",
    });
  }
};


export const creartEjercio = async(req,res)=>{


    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errores :errors.array()
            })
        }

        const ejercicio = new Ejercicio(req.body)
        await ejercicio.save()
        res.status(201).json({
           mensaje:"el producto fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:"Error al intentar crear el ejercicio"
        })
    }
    
}
import { Router } from "express";
import { creartEjercio, listaEjercicios } from "../controllers/ejercicio.controllers";
import {check} from "express-validator"


const router = Router();
router.route("/ejercicio").get(listaEjercicios).post([
    check("ejercicio")
    .notEmpty()
    .withMessage("El nombre del ejercicio es obligatorio")
    .isLength({min:10,max:200})
    .withMessage("la cantidada minima de caracteres es de 10 y la maxima es de 200"),
    check("categoria")
    .notEmpty()
    .withMessage("la categoria es obligatoria"),
    check("image")
    .notEmpty()
    .withMessage("la url de la imagen es obligatoria"),
    check("series").notEmpty().withMessage("la cantidad de series es obligatoria"),
    check("tecnica").notEmpty().withMessage("la descripcion del ejercicio es obligatorio"),
    check("repeticiones").notEmpty().withMessage("la descripcion de las repeticione es obligatorio")

    
],creartEjercio)

export default  router;
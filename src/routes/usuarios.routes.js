import { Router } from "express";
import { check } from "express-validator";
import { crearUsuario, listaUsuario } from "../controllers/usuario.controllers";

const router = Router();

router
  .route("/usuarios")
  .get(listaUsuario)
  .post(
    [
      check("nombre")
        .notEmpty()
        .withMessage("el nombre del usuario es obligatorio")
        .isLength({ min: 2, max: 100 }),
      check("apellido")
        .notEmpty()
        .withMessage("el apellido es oblgatorio")
        .isLength({ min: 2, max: 100 }),
      check("email")
        .isEmail()
        .withMessage("el email es obligatorio"),
        check("password").notEmpty().withMessage("la contraseña es obligatoria").isLength({min:8})
    ],
    crearUsuario
  );

export default router;

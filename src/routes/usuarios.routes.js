import { Router } from "express";
import { check } from "express-validator";
import { crearUsuario, listaUsuario, login } from "../controllers/usuario.controllers";

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
      check("email").isEmail().withMessage("el email es obligatorio"),
      check("password")
        .notEmpty()
        .withMessage("la contraseña es obligatoria")
        .isLength({ min: 8 }),
    ],
    crearUsuario
  );
router
  .route("/usuarios/login")
  .post([
    check("email", "El mail es oblogatorio").isEmail(),
    check(
      "password",
      "el passsword debe contener 8 caracteres minimo"
    ).isLength({ min: 8 }),
  ],
  login
  );
export default router;

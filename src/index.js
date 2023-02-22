import express from "express";
import cors from "cors"
import morgan from "morgan";
import path from "path";
import "./database";
import ejercicioRoute from "./routes/ejercicios.routes";
import usuarioRoute from "./routes/usuarios.routes"

const app = express();

app.set("port",process.env.PORT || 4019);
app.listen(app.get("port"),()=>{
    console.log("estas en el puerto " + app.get("port"))
})

const list = ["https://backend-gym.vercel.app//apiGym/usuarios"]
app.use(cors({origin:list}));
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"../public")))

app.use("/apiGym", ejercicioRoute)
app.use("/apiGym",usuarioRoute)
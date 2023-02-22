import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/gym";
const url = "mongodb+srv://JavierSrfc:Riversrfc1010@cluster0.3kg4e1g.mongodb.net/gym";

mongoose.connect(url)

const conexion = mongoose.connection;

conexion.once("open",()=>{
    console.log("db conectada")
})
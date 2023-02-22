import mongoose,{Schema} from "mongoose";

export const UsuariosSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        minLength:2,
        maxLength:100,
    },
    apellido:{
        type:String,
        required:true,
        minLength:2,
        maxLength:100

    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        minLength:8
    }
})

const Usuario = mongoose.model("usuario",UsuariosSchema)
export default Usuario;
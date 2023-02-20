import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  ejercicio: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    maxLength: 200,
  },
  categoria: {
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true
  },
  repeticiones:{
    type:String,
    required:true
  },
  series:{
    type:String,
    required:true
  },
  tecnica:{
    type:String,
    required:true
  },

});


const Ejercicio = mongoose.model("ejercicio",productoSchema)
export default Ejercicio;
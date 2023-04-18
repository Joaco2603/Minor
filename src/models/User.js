const {Schema,model} = require('mongoose')

const UserSchema = Schema({
    nombre:{
        type:String,
        require:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatorio']
    },
    img:{
        type:String,
    },
    estado:{
        type:Boolean,
        default:true
    }
})

UserSchema.methods.JSON = function(){
    const {__v,password,...usuario} = this.toObject();
    return usuario
}


module.exports = model('User',UserSchema)
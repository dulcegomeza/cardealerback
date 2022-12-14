const { Schema, model } = require('mongoose');

const userSchema = Schema({
    name : {
        type: String,
        required : [true, 'Name required']
    },
    lastName : {
        type: String,
        required: [true, 'Last name required']
    },
    email:{
        type: String,
        unique : [true, 'email unique']
    },
    password :{
        type: String,
        required: [true, 'password required']
    },
    phone :{
        type: String        
    },
    address :{
        type: String,
        required: [true, 'address required']        
    },
    city :{
        type: String,
        default: ''      
    },    
    state :{
        type: String,
        default: ''      
    },
    cp :{
        type: String,
        default: ''      
    },
    country :{
        type: String,
        default: ''       
    }
})

userSchema.methods.toJSON = function (){
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', userSchema);
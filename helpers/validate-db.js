const { Model, Brand } = require("../models")

const modelExists = async(id) =>{
    const modelExist = await Model.findById(id);
    if( !modelExist){
        throw new Error(`Id not exists ${id}`);
    }

}

const brandExists = async(id) =>{
    const brandExist = await Brand.findById(id);
    if( !brandExist){
        throw new Error(`Id not exists ${id}`);
    }

}

module.exports = {
    modelExists,
    brandExists
}

const { Brand } = require('../models');

const brandsGet = async(req, res) =>{

   const brands = await Brand.find();
    
    res.json({ brands })
}


const brandsPost = async (req, res) =>{
   
    const brandData = req.body;

    //validar que una categoria ya existe
    const brandDB = await Brand.findOne({ 'name':brandData.name });

    if(brandDB){
        return res.status(400).json({msg: `brand ${ brandData.name } exist`});
    }

    const brand = new Brand(brandData);

    await brand.save();

    res.status(201).json(brand);

}


const brandsPut = async(req, res) =>{
    const { id } = req.params;
    const brandData = req.body;

    const brand = await Brand.findByIdAndUpdate(id, brandData);


    res.json({ 'msg': 'put', brand })
}



module.exports = {
    brandsGet,
    brandsPost,
    brandsPut
}
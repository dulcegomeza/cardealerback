
const { Model } = require('../models');

const modelsGet = async(req, res) =>{

    const { desde = 0, limite = 12 } = req.query;

    const query = { status: true};

    const [ models, total ] = await Promise.all([
        Model.find(query)
        .populate('brand', 'name')
        .skip(Number(desde)).limit(Number(limite)),
        Model.countDocuments(query)
    ])

    res.json({ models, total })
}


const modelsGetById = async(req, res) =>{
    const { id } = req.params;
    const model = await Model.findById(id).populate('brand','name');

    res.json(model);
}


const modelsPost = async (req, res) =>{
   
    const {model, ...resto} = req.body;

    const modelDB = await Model.findOne({ model });

    if(modelDB){
        return res.status(400).json({msg: `model ${model} exist`});
    }

    const data = {
        ...resto,
        model
    }

    const models = new Model(data);

    await models.save();

    res.status(201).json(models);

}


const modelsPut = async(req, res) =>{
    const { id } = req.params;
    const data = req.body;

    const model = await Model.findByIdAndUpdate(id, data);


    res.json({ 'msg': 'put', model })
}


const modelsPutStock = async (req, res) =>{


    const { id } = req.params;

    const { cantidad } = req.body;

    const  model = await Model.findByIdAndUpdate(id, {stock: cantidad });
    res.json({ 'msg': 'update', model })
}

module.exports = {
    modelsGet,
    modelsGetById,
    modelsPost,
    modelsPut,
    modelsPutStock
}
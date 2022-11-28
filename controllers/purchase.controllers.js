const { Purchase } = require('../models');

const purchasesPost = async (req, res) =>{
   
    const purchaseData = req.body;

    const purchase = new Purchase(purchaseData);

    await purchase.save();

    res.status(201).json(purchase);

}

module.exports = {
    purchasesPost    
}
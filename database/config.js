const mongoose = require('mongoose');

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Online Data Base');
    } catch (error){
        throw new Error('Data base starting error');
    }
}

module.exports = {dbConnection};
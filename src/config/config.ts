import mongoose from 'mongoose';


export default  function dbConnection(MONGO_URI: any) {
    const db =  mongoose.connect(MONGO_URI)
    mongoose.connection.on('error', err => {
        console.log('Error');
    })

    mongoose.connection.once('connected', err => {
        console.log('Conectado correctamente');
    })

}
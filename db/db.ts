import { connect } from 'mongoose';

const conectarBD = async ()=>{
    return await connect('mongodb+srv://carlosesp10:Carlos7891@cluster0.zyp7r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ).then(()=>{
        console.log("Conexion exitosa");
    })
    .catch((e) => {
        console.log("Error conectando a la bd", e );
    });
};

export default conectarBD;
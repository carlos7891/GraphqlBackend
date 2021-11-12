import  conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol, Enum_EstadoUsuario, Enum_TipoObjetivo } from './models/enums';
import { ProjectModel } from './models/project';

const main = async () =>{
    await conectarBD();

    await ProjectModel.create({
        nombre: "Proyecto 1",
        presupuesto: 120,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/11/10"),
        lider: "618c4b5cefbb48ddb7e332dd",
        objetivos:[
            {descripcion: 'Objetivo general', tipo: Enum_TipoObjetivo.general},
            {descripcion: 'Objetivo especifico 1', tipo: Enum_TipoObjetivo.especifico},
            {descripcion: 'Objetivo especifico 2', tipo: Enum_TipoObjetivo.especifico},
        ]
    });

    // const proyecto = await ProjectModel.find({ nombre: 'Proyecto 3'}).populate('lider');

    // console.log('el proyecto es: ', proyecto)


};

main();

    //Crud Usuarios!

    //Crear los Usuarios
    // await UserModel.create({
    //     apellido:"Marin",
    //     correo:"jrm@.com",
    //     identificacion:"4456864",
    //     nombre:"Jorge",
    //     rol: Enum_Rol.estudiante,
    // })
    // .then((u) =>{
    //     console.log('usuario creado', u);
    // })
    // .catch((e) =>{
    //     console.log('error creando usuario', e);
    // });
    // Obtener los Usuarios
    // await UserModel.find().then((u) =>{
    //     console.log('usuarios', u);
    // })
    // .then((u) =>{
    //     console.log('usuario creado', u);
    // })
    // .catch((e) =>{
    //     console.log('error creando usuario', e);
    // });
    // Editar un usuario
    // await UserModel.findOneAndUpdate(
    //     {correo: 'dcg@.com'},
    //     {
    //     nombre:'Juan',
    //     })
    //     .then((u) =>{
    //         console.log('usuario modificado', u);
    //     })
    //     .catch((e) =>{
    //         console.log('error modificando usuario', e);
    //     });
     // Eliminar un usuario
    // await UserModel.findOneAndDelete(
    //     {correo: 'dcg@.com'
    //     }
    //     ).then((u) =>{
    //         console.log('usuario modificado', u);
    //     })
    //     .catch((e) =>{
    //         console.log('error modificando usuario', e);
    // });
    //  await UserModel.findOne(
    //     {identificacion: '456464'},
    //     )
    //     .then((u) =>{
    //         console.log('usuario encontrado', u);
    //     })
    //     .catch((e) =>{
    //         console.log('error encontrando usuario', e);
    //     });
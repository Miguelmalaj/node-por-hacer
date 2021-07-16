const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task to do'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'create an element to do ', {
        descripcion: descripcion

    })
    .command('actualizar', 'Update the state of a task completed', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'it deletes a task ', {
        descripcion: descripcion

    })
    .help()
    .argv;


module.exports = {
    argv: argv
}
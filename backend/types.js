//Basically validation
//Zod library is used for verification of user input
const zod = require("zod");

const createtodo = zod.objeect({
    title:zod.string(),
    description:xod.string()
})

const upadtetodo = zod.object({
    id:zod.string(),
})

module.exports = {
    createtodo: createodo,
    updatetodo: updatetodo
}
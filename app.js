const http = require ('http');
const server = http.createServer ((req,res)=>
{
    console.log('Conexion de usuario')
    res.end ('Se ha completado la conexion')
})
server.listen (3000,()=>
{
    console.log ('En espera...')
})
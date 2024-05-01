const express = require('express');
const dbconnect = require('./config');
const UserModel = require('./userModel');


dbconnect();
const app = express();
const router = express.Router();

router.post("/", async(req, res)=>{
    const body = req.body;
    const respuesta = await UserModel.create(body);
    res.send(respuesta);
});

router.get("/", async(req, res) =>{
    const respuesta = await UserModel.find({})
    res.send(respuesta);
});

router.get("/:id", async(req, res) =>{
    const id = req.params.id
    const respuesta = await UserModel.findById(id);
    res.send(respuesta);
});

router.get("/:id", async(req, res) =>{
    const id = req.params.id
    const respuesta = await UserModel.findById(id);
    res.send(respuesta);
});

router.put("/:id", async(req, res) =>{
    const body = req.body
    const id = req.params.id
    const respuesta = await UserModel.findOneAndUpdate({_id: id}, body);
    res.send(respuesta);
}
);
router.delete("/:id", async (req, res)=>{
    const id=req.params.id
    const respuesta = await UserModel.findOneAndDelete({_id: id})
    res.send(respuesta)
})

app.use(express.json());
app.use(router);
app.listen(3005, ()=>{

    console.log("Conexión realizada exitosamente en el puerto 3005")
})

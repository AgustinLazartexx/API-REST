const express = require ('express');
const dbconnect = require('./config.js');
const ModelUser = require('./userModel.js');

const app = express();

const router= express.Router();
//Rutas crud
//
router.post("/",async (req, res)=>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
}
)
router.get("/", async (req, res)=>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
}
)

router.get("/:id", async (req, res) => {
    const id = req.params.id; 
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);

})




//update
router.put("/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id; 
    const respuesta = await ModelUser.findOneAndUpdate({_id:id}, body)
    res.send(respuesta);

})
//delete
router.delete("/:id", async (req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta);
}
)


app.use(express.json())

app.use(router)
app.listen(3000, ()=> {
    console.log("El servidor esta en el puerto 3000")
})

dbconnect();
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 6666,
    database: 'nodes'
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM usuarios";
    db.query(sql, (err, resul)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(resul);
    })
})

app.post('/user', (req, res)=> {
    const sql = "INSERT INTO usuarios (`usuario`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.password
    ]
    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, resul)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(resul);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE usuarios SET `usuario` = ?, `password` = ? WHERE ID = ?";
    const id = req.params.id;
    const values = [
        req.body.name,
        req.body.password,
        id
    ]
    db.query(sql, values, (err, resul)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(resul);
    });
})

app.listen(8081, ()=>{
    console.log("listening");
})
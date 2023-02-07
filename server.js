
const express = require('express')
const cors = require("cors");
const { Pool } = require('pg');
const server = express();
const port = 3000

const pool = new Pool({
    user: "postgres",
    password: "Beatrice3105$",
    host: "localhost",
    port: 5432,
    database: "has_db"
  });

server.use(express.json());
server.use(cors());

server.post('/api/doctor/register', (req, res) => {

    const { firstName, lname, email, password } = req.body;

    pool.query('INSERT INTO form (firstName, lname, email, password) VALUES ($1, $2, $3)', [firstName, lname, email, password], (error, result) => {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.json({ result });
        }
      });
    });

server.listen(port, () => console.log('god of mother Inonge come through for me on port', port))

/*const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.post("login",(req,res) => {
    console.log(req.body)
    res.send("response received: " + req.body)
})

app.listen(8080, () => console.log("server on localhost:8080"))*/
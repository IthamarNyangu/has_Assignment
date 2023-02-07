const { Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    password: "Beatrice3105$",
    host: "localhost",
    port: 5432,
    database: "has_db"

})

pool.connect();



const express = require('express');
const cors = require('cors');
const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);
app.delete("/api/houses/:id", deleteHouse);

const SERVER_PORT = 4321
app.listen(SERVER_PORT, ()=> console.log(`Server is successfully running on ${SERVER_PORT}`))

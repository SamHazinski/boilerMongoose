const express = require("express");
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const app = express();
const db = require('./config/connection');

app.use(express.json());

app.use('/api', routes);

db.once('open', ()=>{
app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`)
})
})
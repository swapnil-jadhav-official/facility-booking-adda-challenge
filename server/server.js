const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT;
const router = require('./routes/facilityRoute');
const cors = require('cors')
app.use(cors())
app.use(express.json());

//routes to booking
app.use('/api', router)





app.listen(5000,()=>{
    console.log(`Server is running on http://localhost${port}`)
})
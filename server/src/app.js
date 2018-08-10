const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email} ! your user was registered! have fun`
    })
})

PORT = process.env.PORT || 8082

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
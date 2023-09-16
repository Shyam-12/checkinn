const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
const app = express();

const bcryptSalt = bcrypt.genSalt(10);

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
const User = db.User;
const Op = db.Sequelize.Op;
db.sequelize.sync();

app.get('/test', (req, res) => {
    res.json("Hello from server");
}); 

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json({user});
})

app.listen(4000);

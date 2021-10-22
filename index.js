const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const handler = (req, res)=>{
//     res.send('hello from node');
// }

// app.get('/',handler);

//--------------- or --------------
const users = [
    { name: 'Sk', id: 0 },
    { name: "Satu", id: 1 },
    { name: "Robin", id: 2 },
    { name: "sohel", id: 3 },
    { name: "mahfuz", id: 4 },
    { name: "asad", id: 5 },

]
app.get('/', (req, res) => {
    res.send('users');
});

app.get('/users', (req, res) => {

    console.log(req.query.search);
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

// app.method --------------------------
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

// dynamic api --------------------
app.get('/users/:id', (req, res) => {
    userId = req.params.id;
    const user = users[userId - 1];
    res.send(user);
});

app.get('/users/:id', (req, res) => {
    userId = req.params.id;
    const user = users[userId - 1];
    res.send(user);
});


app.listen(port, () => {
    console.log('listening to port', port);
});


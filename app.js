const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/get', (req, res) => {
    try {
        const data = req.query;
        if (Object.keys(data).length) {
            res.json(data);
        } else {
            res.json({
                message: 'К сажелению Вова нам ничо не отправил'
            });
        }
    } catch (err) {
        res.json({
            message: 'Шота пашло не так... Вова, не чуди!',
            error: err
        });
    }
});

app.post('/post', (req, res) => {
    try {
        const data = req.body;
        if (Object.keys(data).length) {
            res.json(data);
        } else {
            res.json({
                message: 'К сажелению Вова нам ничо не отправил'
            });
        }
    } catch (err) {
        res.json({
            message: 'Шота пашло не так... Вова, не чуди!',
            error: err
        });
    }
});

app.put('/put/:id', (req, res) => {
    try {
        const data = req.params;
        if (Object.keys(data).length) {
            res.json(data);
        } else {
            res.json({
                message: 'К сажелению Вова нам ничо не отправил'
            });
        }
    } catch (err) {
        res.json({
            message: 'Шота пашло не так... Вова, не чуди!',
            error: err
        });
    }
});

app.put('/put', (req, res) => {
    try {
        res.json({
            message: 'К сажелению Вова нам ничо не отправил'
        });
    } catch (err) {
        res.json({
            message: 'Шота пашло не так... Вова, не чуди!',
            error: err
        });
    }
});

app.delete('/delete/:name', (req, res) => {
    try {
        const data = req.params;
        if (Object.keys(data).length) {
            res.json(data);
        } else {
            res.json({
                message: 'К сажелению Вова нам ничо не отправил'
            });
        }
    } catch (err) {
        res.json({
            message: 'Шота пашло не так... Вова, не чуди!',
            error: err
        });
    }
});
app.delete('/delete', (req, res) => {
    try {
        res.json({
            message: 'К сажелению Вова нам ничо не отправил'
        });
    } catch (err) {
        res.json({
            message: 'Шота пашло не так... Вова, не чуди!',
            error: err
        });
    }
});


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on ${process.env.PORT || PORT} port.`);
});
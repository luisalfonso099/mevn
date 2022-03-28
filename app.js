const express = require('express');
const morgan  = require('morgan');
const cors    = require('cors');
const path    = require('path');
const history = require('connect-history-api-fallback');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para Vue.js router modo history
// app.get('/', (req, res) => {
//     res.send('Hola mundo');
// });

app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), (req, res) => {
    console.log('Servidor ' + app.get('puerto'));
});
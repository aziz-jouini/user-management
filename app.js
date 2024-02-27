require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = 5000 || process.env.PORT;
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static('public'));
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
      const locals = {
      title: 'NodeJs',
        description: 'FREE nodejs user management system'
    }
    res.render('index',locals);
});
app.get('*', (req, res) => {
    res.status(404).render('404');
});
app.listen(port,()=> {
    console.log(`app listening on port ${port}`)
});

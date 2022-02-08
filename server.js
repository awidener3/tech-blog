const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = proces.env.PORT || 3001;

// Handlebars
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Listening...'));
});

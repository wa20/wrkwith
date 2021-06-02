const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs =exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handle', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}.`));
  });
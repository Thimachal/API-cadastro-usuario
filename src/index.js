const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);

//app.listen(process.env.PORT || 3000);


//abaixo a porta para servidor local, caso queira testar no seu computador

app.listen(3000, () => {
    console.log('Server runnig on port http://localhost:3000');

});

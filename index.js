const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const typesRouter = require('./routes/types');

app.use(express.json());
app.use('/types', typesRouter);

app.listen(port, () => {
    console.log(`Aplicación en ejecución en el puerto ${port}`);
});

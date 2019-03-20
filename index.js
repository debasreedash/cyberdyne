const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.send(`Howdy from Debbie's app engine!`);
});

app.listen(PORT, () => {
    console.log(`Cyberdyne is learning on port ${PORT}`);
});




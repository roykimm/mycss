const express = require('express');
const path = require('path');

const app = express();
const PORT = 7020;
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.send('./public/index.html');
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
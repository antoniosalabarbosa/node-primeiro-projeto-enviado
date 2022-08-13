const {Express, Path} = require('./models/models');

Express.get('/', (req, res)=>{
    res.sendFile(Path.join(__dirname, '/view/index.html'));
});
Express.get('/about', (req, res)=>{
    res.sendFile(Path.join(__dirname, '/view/about.html'));
});
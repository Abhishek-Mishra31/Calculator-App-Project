let express = require('express');
let app = express();
var path = require('path');
const port = 8000;
const hostname = '127.0.0.1';
app.use(express.static('public'));

app.get('/' , (req,res)=>{
    res.send(path.join(__dirname , 'index.html'));
})

app.listen(port , hostname , ()=>{
   console.log(`Server Started on http://${hostname}:${port}`);
})
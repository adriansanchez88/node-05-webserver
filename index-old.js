const http = require('http');

http.createServer((req, res) =>{

    console.log(req);
    //res.writeHead(200, {'Content-Type': 'application/json'});
    /*const user = {
        id: 123,
        name: 'Adrian'
    }
    res.write(JSON.stringify(user));*/
    res.setHeader('Content-Disposition','attachment; filename=usuarios.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    
    res.write('id;name\n');
    res.write('1;Adrian\n');
    res.write('2;Rita\n');
    res.end();

}).listen(3000);
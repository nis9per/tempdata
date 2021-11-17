const http= require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('Welcome to our Homepage')
    }
    if(req.url==='/about')
    {
        res.end('This is our about page.')
    }
    else{
        res.write(`<h1>Oops!</h1>`);
    }
    

})

server.listen(5000);
const dbConnect = require('./mongodb')
// first rule of handling promisses

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data);
//     })
// })

//Second rule of handling promisses
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}


main();






















// const express = require('express');
// const reqFilter = require('./middleware')
// const app = express();
// const route = express.Router();


// //app.use(reqFilter)
// route.use(reqFilter)
// app.get('/', (req, resp) => {
//     resp.send('Welcome to home page')
// });

// route.get('/users', reqFilter, (req, resp) => {
//     resp.send('Welcome to User page')
// });

// route.get('/about', reqFilter, (req, resp) => {
//     resp.send('Welcome to about page')
// });

// app.use('/', route);

// app.listen(3000)


// const http = require('http');
// const data = require('./data')
// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'application\json' });
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);
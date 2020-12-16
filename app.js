//Определение сервера, подключение бд, роуты, порт сервера
const express = require('express');
const path = require('path');
const postRouter = require('./routes/post');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Full-stack-blog')
  .then ( () => console.log('MongoDB connected') )
  .catch (error => console.error(error) )

const port = process.env.PORT || 5000;
const clientPath = path.join(__dirname, 'client');

const app = express();
app.use('/api/post', postRouter)
app.use(express.static(clientPath));

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
})



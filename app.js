const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const errorMiddleware = require('./middlewares/error');
const cors = require('cors');

const app = express();

// config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: './config/config.env' });
}
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const user = require('./routes/userRoute');
const product = require('./routes/productRoute');
const order = require('./routes/orderRoute');
const payment = require('./routes/paymentRoute');

app.use('/api/v1', user);
app.use('/api/v1', product);
app.use('/api/v1', order);
app.use('/api/v1', payment);

// deployment
app.use(
    "/static",
    express.static(path.join(__dirname, "client", "build/static"))
  );

  app.use(
    "/manifest.json",
    express.static(path.join(__dirname, "client", "build", "manifest.json"))
  );

  app.use(
    "/favicon.ico",
    express.static(path.join(__dirname, "client", "build", "favicon.ico"))
  );

  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });



// error middleware
app.use(errorMiddleware);

module.exports = app;

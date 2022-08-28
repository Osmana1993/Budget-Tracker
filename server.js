'use strict';

const express = require(`express`);
const mongoose = require(`mongoose`);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(`public`));

// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/budget`, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// });
const URI = process.env.MONGODB_URL;

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/budget`, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});

// routes
app.use(require(`./routes/api.js`));

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
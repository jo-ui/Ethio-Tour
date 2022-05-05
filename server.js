const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// console.log(process.env);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    ///////for local database replace DB with this line
    //process.env.DATABASE_LOCAL
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    //useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}..`);
});

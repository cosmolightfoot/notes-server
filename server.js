require('dotenv').config();
require('./lib/utils/connect')();
const app = require('./lib/app');

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
  //eslint-disable-next-line no-console
  console.log(`listening to smooooth jazz on ${PORT}`);
});



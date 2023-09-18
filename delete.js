const { User } = require('./models');

// -- Delete Data

User.destroy({
  where: {id : 2}
}).then((result) => {
  console.log('Sukses delete', result);
}).catch((err) => {
  console.error(err);
});
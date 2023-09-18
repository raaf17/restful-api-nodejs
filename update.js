const { User } = require('./models');

// -- Update Data
const data = {
  firstName: 'Muhammad',
  lastName: 'Izzudin',
  email: 'zudin@gmail.com'
}

User.update(data, {
  where: {id : 2}
}).then((result) => {
  console.log('Sukses update user dengan ID:', result);
}).catch((err) => {
  console.error(`Gagal update user ${JSON.stringify(err)}`);
});
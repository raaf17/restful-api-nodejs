const { User } = require('./models');

// -- Create User
const data = {
  firstName: 'Budi',
  lastName: 'Santoso',
  email: 'budi@gmail.com'
}

User.create(data).then((result) => {
  console.log('Created user with id:', result);
}).catch((err) => {
  console.error(`Error creating new user ${JSON.stringify(err)}`);
});
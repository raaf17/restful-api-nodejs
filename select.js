const { User } = require('./models');

// -- Select User
User.findAll({
  attributes: ['firstName', 'email'],
  where: {
    id: 2
  }
}).then((result) => {
  // console.log(JSON.stringify(result, null, 2));
  result.forEach((data) => {
    console.log(`ID : ${data.id}`);
    console.log(`firstName : ${data.firstName}`);
    console.log(`lastName : ${data.lastName}`);
    console.log(`Email : ${data.email}`);
    console.log(`--------------------`)
  })
}).catch((err) => {
  console.error('Error: ', err); // eslint-disable-line no-console
});
const userController = require('./controllers/userController');
const User = require('./models/User');


userController.signUp();


// const user = new User({
//     name: 'Ryan',
//     password: 'abcd1234',
//     email: 'ryan@gmail.com',
//     gender: 0,
//     phone: '15811112222'
// });
// console.log(user);
// console.log(user.getPlainObject());

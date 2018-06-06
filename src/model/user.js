const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  passwordHash: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  accessLevel: { type: String, required: true },
  tokenSeed: { type: String, required: true, unique: true },
  created: { type: Date, default : () => new Date()},
});

const User = module.exports = mongoose.model('user', userSchema);

User.create = (body) => {
  const user = new User({
    passwordHash: body.passwordHash,
    email: body.email,
    username: body.username,
    accessLevel: body.accessLevel,
    tokenSeed: body.tokenSeed
  });

  user.save(function(err, user) {
    if(err) {
      console.log(err);
      console.log('error saving user');
    }
  });
}

User.tokenCreate = () => {
  console.log('make some token');
}

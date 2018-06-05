const userSchema = mongoose.Schema({
  passwordHash: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  accessLevel: { type: String, required: true },
  tokenSeed: { type: String, required: true, unique: true },
  created: { type: Date, default : () => new Date()},
});

const User = module.exports = mongoose.model('user', userSchema)
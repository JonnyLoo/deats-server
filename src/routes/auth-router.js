'use strict'

const Router = require('express');
const bodyParser = require('body-parser');

//import basicAuth from '../lib/basic-auth-middleware.js'
const User = require('../model/user.js');

const authRouter = module.exports = new Router();

authRouter.post('/api/signup', (req, res, next) => {
  console.log('hit /api/signup')

  User.create(req.body);
})

authRouter.get('/api/login', (req, res, next) => {
  console.log('hit /api/login')

  req.user.tokenCreate();
})

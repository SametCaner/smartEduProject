const User = require('../models/User');
const bcrypt = require('bcrypt');


exports.createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json({
        status: 'success',
        user,
      });
    } catch (error){
      res.status(400).json({
        status: 'fail',
        error,
      });
    }
  };

exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({email})
      if(user){
        const same = await bcrypt.compare(password, user.password);          
            if (same){
              //USER Session
              res.status(200).send('You are logged in!');
            } else {
              res.status(401).send('Incorrect password');
            }
          }else {
            res.status(404).send('User not found!');

          }
        } catch (error){
      res.status(400).json({
        status: 'fail',
        error,
      });
      console.log(error);
    }
  };
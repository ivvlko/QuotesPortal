const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const signupController = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        let user = await User.findOne({
            email
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }

        user = new User({
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            "randomString", {
                expiresIn: '10 days'
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (err) {
        console.log(err);
        res.status(500).send("Error in Saving");
    }
}


const loginController = async (req, res) => {
        
    const { email, password } = req.body;
    try {
      let user = await User.findOne({
          email
      });
      if (!user)
        return res.status(400).json({
          message: "User Does Not Exist"
        });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password !"
        });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: '10 days'
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (e) {
      res.status(500).json({
        message: "Server Error"
      });
    }
  }

module.exports = {
    signupController,
    loginController,
}
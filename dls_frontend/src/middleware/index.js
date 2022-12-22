const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const APP_SECRET = process.env.APP_SECRET;

const hashPassword = async (password) => {
  //Accepts a password from the request body
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  //creates a hashed password and encryps it 12 times
  return hashedPassword;
};

const comparePassword = async (storedPassword, password) => {
  // Accepts the password proviced in the login request and the currently stored password
  // compares the two passwords for a match
  let passwordMatch = await bcrypt.compare(password, storedPassword);
  // returns true if the passwords match
  // returns false if the passwords do not match
  return passwordMatch;
};

const createToken = (payload) => {
  //Accepts a payload with which to create the token
  let token = jwt.sign(payload, APP_SECRET);
  //Generates the token and encrypts it, returns the token when the process finishes
  return token;
};

const verifyToken = (req, res, next) => {
  const { token } = res.locals;
  try {
    let payload = jwt.verify(token, APP_SECRET);
    if (payload) {
      return next();
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized, payload" });
  } catch (error) {
    res.status(401).send({ status: "Error", msg: "Unauthorized, token" });
  }
};

const stripToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (token) {
      res.locals.token = token;
      return next();
    }
  } catch (error) {
    res.status(401).send({ status: "Error", msg: "Unauthorized, strip token" });
  }
};

module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword,
};

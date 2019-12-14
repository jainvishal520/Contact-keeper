// Middleware are used to intercept req and response and add some functionality to it
const jwt = require("jsonwebtoken")
const config = require("config")

module.exports = function(req, res, next) {
  //Get the token from header
  const token = req.header("x-auth-token")

  //Check if token is not present
  if (!token) {
    return res.status(401).json({ msg: "No Token, authorization is denied" })
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"))
    req.user = decoded.user
    next()
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" })
  }
}

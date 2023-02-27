const jwt = require("jsonwebtoken");

const ComprobarToken = (req, res, next) => {
  const { token } = req.headers;
  const decoded = jwt.verify(token, "liseth");
  console.log(decoded.usuarios._id);
  req.headers._id = decoded.usuarios._id;
  next();
};

module.exports = ComprobarToken;

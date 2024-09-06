const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "invalid request",
    });
  }

  const value = token.split(" ");
  const jwtToken = value[1];
  const decodedvalue = jwt.verify(jwtToken, JWT_SECRET);
  if (decodedvalue.userId) {
    req.userId = decodedvalue.userId;
    next();
  } else {
    return res.status(403).json({
      message: "invalid credentials",
    });
  }
};

module.exports = {
  authMiddleware,
};

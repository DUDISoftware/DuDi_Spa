import { verify } from 'jsonwebtoken';

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({
      error: 401,
      error_text: "Không có token!",
      data_name: "Xác thực",
      data: []
    });
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({
      error: 401,
      error_text: "Token không hợp lệ!",
      data_name: "Xác thực",
      data: []
    });
  }

  const token = parts[1];

  try {
    const decoded = verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.status(401).json({
        error: 401,
        error_text: "Token không chứa ID!",
        data_name: "Xác thực",
        data: []
      });
    }

    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      error: 401,
      error_text: "Token không hợp lệ hoặc đã hết hạn!",
      data_name: "Xác thực",
      data: []
    });
  }
}

export default verifyToken;

import jwt from "jsonwebtoken";

export function verifyToken(req) {
  try {
    const token = req.cookies.get("authToken")?.value;

    if (!token) {
      return { valid: false, error: "No token found" };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return { valid: true, user: decoded };
  } catch (err) {
    console.error("JWT verify error:", err);
    return { valid: false, error: "Invalid token" };
  }
}

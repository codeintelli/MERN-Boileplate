require("dotenv").config({ path: "./config.env" });

export const {
  PORT,
  DB_URL,
  JWT_SECRET,
  JWT_EXPIRE,
  COOKIE_EXPIRE,
  SMTP_MAIL,
  SMTP_SERVICE,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_PASS,
  FRONTEND_URL,
  CLOUD_NAME,
  CLOUD_API_KEY,
  CLOUD_API_SECRET,
  CLOUDINARY_URL,
  LOGIN_URL,
  AWS_BUCKET,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION
} = process.env;

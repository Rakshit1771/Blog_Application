import jwt from "jsonwebtoken";
export const accesstoken = (userid) => {
  return jwt.sign(
    {
      userid,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    }
  );
};

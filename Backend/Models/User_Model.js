import mongoose, { Schema } from "mongoose";
// import bcrypt from "bcrypt"
import bcrypt from "bcrypt";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  console.log("password comapring enter");
  
  return await bcrypt.compare(password, this.password);
};
export const User = mongoose.model("User", userSchema);

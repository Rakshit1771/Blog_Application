import { User } from "../Models/User_Model.js";
import { accesstoken } from "../Utils/JwtTokens.js";
import { verifytoken } from "../Utils/Verifyjwt.js";
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(username, email, password);

  if ([username, email, password].some((field) => field.trim() === "")) {
    console.log("All Fields Are Required");
  }

  const exiestUser = await User.findOne({ email });
  if (exiestUser) {
    return console.log("User is already  present");
  }

  const user = await User.create({
    username,
    email,
    password,
  });
  if (user) {
    console.log("User create successfully");
  } else {
    console.log("Error To maken user on DB");
  }
  res.status(201).json({
    success: true,
    message: "User registered successfully",
  });
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User does not exist",
    });
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if(!isPasswordValid) {
    console.log("Invalid Password");
    
  }
const token = accesstoken(user.email)
console.log(token,"is your token");
console.log(verifytoken ,"isverifiedtoken");


res.cookie("JwtToken", token, {
  httpOnly: true,               
  secure: true,                 
  sameSite: "strict",          
  maxAge: 24 * 60 * 60 * 1000,  
});

  return res.status(200).json({
    success: true,
    message: "User login successfully",
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};

export { registerUser, loginUser };

import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const postApiv1Registered = async (req, res) => {
  const { handle, email, password, category } = req.body;
  console.log(req.body);
  const enEncPassword = await bcrypt.hash(password, 10);
  try {
    const defaulLink = {
      url: "https://github.com/saurabhjaykar1603",
      title: "Github",
      icon: "https://cdn-icons-png.flaticon.com/128/2111/2111432.png",
    };
    const user = await User.create({
      handle,
      email,
      password: enEncPassword,
      roll: category,
      links: [defaulLink],
    });

    const token = jwt.sign({ email: email }, process.env.JWT_SECRETE_KEY);
    user.password = undefined;
    return res.status(200).json({
      success: true,
      id: user._id,
      token: token,
      message: "User created successfully",
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(401).json({
        success: false,
        message: "Email or handle already in use. Please try a different one.",
      });
    }
    return res.status(400).json({
      success: false,
      message: "Failed to create user. Please try again.",
    });
  }
};
const postApiv1Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign({ email: email }, process.env.JWT_SECRETE_KEY);

    return res.status(200).json({
      success: true,
      id: user._id,
      token: token,
      message: "User Found",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { postApiv1Registered, postApiv1Login };

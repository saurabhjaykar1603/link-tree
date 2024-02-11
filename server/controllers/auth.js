import User from "../models/User.js";
import jwt from "jsonwebtoken";
const postApiv1Registered = async (req, res) => {
  const { handle, email, password, category } = req.body;
  console.log(req.body);
  try {
    const defaulLink = {
      url: "https://github.com/saurabhjaykar1603",
      title: "Github",
      icon: "",
    };
    const user = await User.create({
      handle,
      email,
      password,
      roll: category,
      links: [defaulLink],
    });

    const token = jwt.sign({ email: email }, process.env.JWT_SECRETE_KEY);

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
  res.status(200).json({
    message: "login",
  });
};

export { postApiv1Registered, postApiv1Login };

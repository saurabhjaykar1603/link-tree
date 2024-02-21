import User from "../models/User.js";
import { jwtDecode } from "jwt-decode";

const postApiv1DashboardData = async (req, res) => {
  const { tokenMail } = req.body;
  console.log(tokenMail);
  try {
    if (!process.env.JWT_SECRETE_KEY) {
      throw new Error("JWT secret key not provided");
    }

    const decodedTokenMail = jwtDecode(tokenMail, process.env.JWT_SECRETE_KEY);
    const email = decodedTokenMail.email;
    console.log("decoded Email", email);

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const userData = {
      name: user.name,
      roll: user.roll,
      bio: user.bio,
      avatar: user.avatar,
      handle: user.handle,
      links: user.links.length,
    };
    return res.status(200).json({
      success: true,
      data: userData,
      message: "User Loaded",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,

      message: error.message,
    });
  }
};

export { postApiv1DashboardData };

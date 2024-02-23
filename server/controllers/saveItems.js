import { jwtDecode } from "jwt-decode";
import User from "./../models/User.js";

const postApiV1SaveSocial = async (req, res) => {
  const { tokenMail, socials } = req.body;

  try {
    const decodeTokenMail = jwtDecode(tokenMail, process.env.JWT_SECRETE_KEY);
    const email = decodeTokenMail.email;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.socialMedia = socials;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "User profile saved",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error saving user profile",
    });
  }
};

export { postApiV1SaveSocial };

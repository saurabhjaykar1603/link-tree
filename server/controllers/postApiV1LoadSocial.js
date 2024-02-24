import { jwtDecode } from "jwt-decode";
import User from "./../models/User.js";
const postApiV1LoadSocial = async (req, res) => {
  const { tokenMail } = req.body;
  try {
    const decodedTokenMail = jwtDecode(tokenMail, process.env.JWT_SECRETE_KEY);
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const socialMedia = user.socialMedia;
    return res.status(200).json({
      success: true,
      data: socialMedia,
      message: "User links loaded",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error loading user social links",
    });
  }
};

export { postApiV1LoadSocial };

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

const postApiV1SaveProfile = async (req, res) => {
  const { tokenMail, bio, name, avatar } = req.body;
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
    user.name = name;
    user.bio = bio;
    user.avatar = avatar;
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

const postApiV1SaveLinks = async (req, res) => {
  const { tokenMail, links } = req.body;
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
    const handle = user.handle

    const newLinkArray = links.map((link) => ({
      url: link.link.url,
      title: link.link.title,
      icon: "",
    }));
    user.links = newLinkArray;
    await user.save();
    return res.status(200).json({
      success: true,
      handle,
      message: "User link saved",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error saving user link",
    });
  }
};

export { postApiV1SaveSocial, postApiV1SaveProfile, postApiV1SaveLinks };

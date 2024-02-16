import User from "../models/User.js";

const getApiV1UserData = async (req, res) => {
  const handle = req.params.handle;
  try {
    const user = await User.findOne({ handle });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
      message: "user found",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


const getApiV1SocialMedia = async (req, res) => {
  const handle = req.params.handle;
  try {
    const user = await User.findOne({ handle });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
      message: "user found with links",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export  {getApiV1UserData, getApiV1SocialMedia};

import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
      console.log("mongoDB connected successfully");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;

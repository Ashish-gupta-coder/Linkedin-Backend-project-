import mongoose from "mongoose";
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONODB_URL);
    console.log("database is connected");
  } catch (error) {
    console.log("database error", error);
  }
};
export default connectDB;

import vine, { errors } from "@vinejs/vine";
import jwt from "jsonwebtoken";
import prisma from "../../db/db.config.js";
import { checkUserSchema } from "../../validations/auth/authValidations.js";

// Login user

const checkUser = async (req, res) => {
  try {
    const body = req.body;

    console.log("body : ", body);

    // Validate request body
    const validator = vine.compile(checkUserSchema);
    const payload = await validator.validate(body);

    // Check if user already exists
    const findUser = await prisma.users.findUnique({
      where: { email: payload.email },
    });

    console.log("findUser : ", findUser);

    if (findUser) {
      // Create payload if user exists
      const payloadData = {
        id: findUser.id,
        name: findUser.name,
        email: findUser.email,
        profileImage: findUser.profileImage,
      };

      // Issue token to login
      const token = jwt.sign(payloadData, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });

      console.log("token : ", token);

      return res.cookie("token", token, { httpOnly: true, secure: true }).json({
        status: 200,
        success: true,
        token: token,
        message: "Logged in successfully!",
        user: findUser,
      });
    }

    // Check if user does not exist
    return res.json({
      status: 400,
      success: false,
      message: "User not found!",
    });
  } catch (error) {
    // Check for validation error
    console.log("error : ", error);
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.json({
        status: 400,
        success: false,
        message: "Validation Error",
        errors: error.messages,
      });
    } else {
      // Check for other errors
      return res.json({
        status: 500,
        success: false,
        message: "Something went wrong!",
      });
    }
  }
};

export default checkUser;

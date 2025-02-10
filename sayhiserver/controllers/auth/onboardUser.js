import vine, { errors } from "@vinejs/vine";
import jwt from "jsonwebtoken";
import prisma from "../../db/db.config.js";
import { onboardUserSchema } from "../../validations/auth/authValidations.js";

// Onboard user

const onboardUser = async (req, res) => {
  try {
    const body = req.body;

    // Validate request body
    const validator = vine.compile(onboardUserSchema);
    const payload = await validator.validate(body);

    // Check if user already exists
    const findUser = await prisma.users.findUnique({
      where: { email: payload.email },
    });

    if (findUser) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Email already exists!",
      });
    }

    // Onboard user
    const user = await prisma.users.create({
      data: payload,
    });

    // Check if user is onboarded successfully
    if (user) {
      const payloadData = {
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        about: user.about,
      };

      // Issue token to login
      const token = jwt.sign(payloadData, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });

      // Create cookie
      return res
        .cookie("token", token, { httpOnly: true, secure: false })
        .status(200)
        .json({
          status: 200,
          success: true,
          token: token,
          message: "User created successfully!",
          user: user,
        });
    }

    // Check if user is not registered
    return res.json({
      errors: {
        status: 400,
        success: false,
        message: "Something went wrong while creating user!",
      },
    });
  } catch (error) {
    // Check for validation error
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Validation Error",
        errors: error.messages,
      });
    } else {
      // Check for other errors
      return res.status(500).json({
        status: 500,
        success: false,
        message: "Something went wrong!",
      });
    }
  }
};

export default onboardUser;

import vine from "@vinejs/vine";
import { CustomErrorReporter } from "../CustomErrorReporter.js";

vine.errorReporter = () => new CustomErrorReporter();

// Validation for register schema
export const registerSchema = vine.object({
  email: vine.string().email(),
  name: vine.string().minLength(2).maxLength(191),
  profileImage: vine.string().optional(),
});

// Validation for login schema
export const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string(),
});

// Validation for checking user
export const checkUserSchema = vine.object({
  email: vine.string().email(),
});

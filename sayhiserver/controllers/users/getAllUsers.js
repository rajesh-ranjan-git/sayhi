import prisma from "../../db/db.config";

const getAllUsers = async (req, res, next) => {
  try {
    const users = await prisma.users.findMany({
      orderBy: {
        name: "asc",
        select: {
          id: true,
          email: true,
          name: true,
          profileImage: true,
          about: true,
        },
      },
    });

    const usersGroupByInitialLetter = {};

    users.forEach((user) => {
      const initialLetter = user.name.charAt(0).toUpperCase();
      if (!usersGroupByInitialLetter[initialLetter]) {
        usersGroupByInitialLetter[initialLetter] = [];
      }
      usersGroupByInitialLetter[initialLetter].push(user);
    });

    return res.status(200).json({ users: usersGroupByInitialLetter });
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Something went wrong!",
    });
  }
};

export default getAllUsers;

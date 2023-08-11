import getSession from "@/app/actions/getSession";
import prisma from "@/app/libs/prismadb";

const getUsers = async () => {
  const session = await getSession();
  if (!session?.user?.email) {
    return [];
  }

  try {
    return await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });
  } catch (e: any) {
    return [];
  }
};

export default getUsers;

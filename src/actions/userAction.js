"use server";

import { FollowsScalarFieldEnum } from "@/generated/prisma/internal/prismaNamespace";
import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) return;

    // Upsert ko check, update aur create parameters chahiye hote hain
    const dbUser = await prisma.user.upsert({
      where: { clerkId: userId }, // Aapki schema ke hisaab se unique field
      update: {
        name: `${user.firstName || ""} ${user.lastName || ""}`,
        username:
          user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
      },
      create: {
        clerkId: userId,
        name: `${user.firstName || ""} ${user.lastName || ""}`,
        username:
          user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
      },
    });

    return dbUser;
  } catch (error) {
    console.error("Sync User Error:", error);
  }
}

// get user by cler id

export async function getUserByClerkId(clerkId) {
  return await prisma.user.findUnique({
    where: {
      clerkId,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following:true,
          posts:true
        },
      },
    },
  });
}

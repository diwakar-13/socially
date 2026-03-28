"use server";

import { revalidatePath } from "next/cache";
import { getDbUserId } from "./userAction";

export async function createPost(content, imageUrl) {
  try {
    const userId = await getDbUserId();
    const post = await prisma.post.create({
      data: {
        content,
        image: imageUrl,
        authorId: userId,
      },
    });
    revalidatePath("/");
    return { success: true, post };
  } catch (error) {
    console.error("Failed to create post:", error);
    return { success: false, error: "Failed to create post" };
  }
}

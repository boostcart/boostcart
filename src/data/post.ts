"use server";

import { PostSchema, PostSchemaType } from "@/schemas";

import { getCurrentUser } from "@/lib/actions";
import { prisma } from "@/lib/db";

export const getPostBySlug = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({ where: { id } });

    return post;
  } catch {
    return null;
  }
};

export const getPostById = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({ where: { id } });

    return post;
  } catch {
    return null;
  }
};

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    return posts;
  } catch {
    return null;
  }
};

export const newPost = async (data: PostSchemaType) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const validatedFields = PostSchema.safeParse(data);

  if (!validatedFields.success) return { error: "invalid_data" };

  try {
    // Create post with translation in a transaction
    await prisma.$transaction(async (tx) => {
      // First create the post
      const post = await tx.post.create({
        data: {
          defaultTitle: validatedFields.data.defaultTitle,
          slug: validatedFields.data.slug,
          cover: validatedFields.data.cover,
          status: validatedFields.data.status,
          userId: currentUser.id,
        },
      });

      // If translations array exists, create each translation
      if (
        validatedFields.data.translations &&
        Array.isArray(validatedFields.data.translations)
      ) {
        for (const translation of validatedFields.data.translations) {
          await tx.postTranslation.create({
            data: {
              postId: post.id,
              language: translation.language,
              title: translation.title,
              content: translation.content,
            },
          });
        }
      } else {
        // Create default translation with post data
        await tx.postTranslation.create({
          data: {
            postId: post.id,
            language: "en", // Default language
            title: validatedFields.data.defaultTitle,
            content: "",
          },
        });
      }

      return post;
    });

    return { success: "post_created" };
  } catch {
    return { error: "something_went_wrong" };
  }
};

// export const editPost = async (postId: string, data: PostSchemaType) => {
//   const currentUser = await getCurrentUser();

//   if (!currentUser) return { error: "not_logged_in" };

//   if (currentUser.role === "USER") return { error: "unauthorized" };

//   const post = await prisma.post.findUnique({
//     where: { id: postId },
//   });

//   if (!post) return { error: "post_not_found" };

//   const validatedFields = PostSchema.safeParse(data);

//   if (!validatedFields.success) return { error: "invalid_data" };

//   try {
//     await prisma.post.update({
//       where: { id: postId },
//       data: validatedFields.data,
//     });

//     return { success: "post_updated" };
//   } catch {
//     return { error: "something_went_wrong" };
//   }
// };

export const deletePost = async (postId: string) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) return { error: "post_not_found" };

  try {
    await prisma.post.delete({
      where: { id: postId },
    });

    return { success: "post_deleted" };
  } catch {
    return { error: "something_went_wrong" };
  }
};

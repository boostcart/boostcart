"use server";

import { ProductSchema, ProductSchemaType } from "@/schemas";

import { getCurrentUser } from "@/lib/actions";
import { prisma } from "@/lib/db";

export async function getProducts() {
	try {
		const products = await prisma.product.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				brand: true,
				category: true,
				images: true,
				variants: true,
				translations: true,
				technicalInfo: true,
				reviews: true,
				tags: true,
			},
		});

		return products;
	} catch {
		return [];
	}
}

export async function getProductById(id: string) {
	try {
		const product = await prisma.product.findUnique({
			where: { id },
			include: {
				brand: true,
				category: true,
				images: true,
				variants: true,
				translations: true,
				technicalInfo: true,
				reviews: true,
				tags: true,
				shippingInfo: true,
			},
		});

		return product;
	} catch {
		return null;
	}
}

export async function getProductBySlug(slug: string) {
	try {
		const product = await prisma.product.findUnique({
			where: { slug },
			include: {
				brand: true,
				category: true,
				images: true,
				variants: true,
				translations: true,
				technicalInfo: true,
				reviews: true,
				tags: true,
				shippingInfo: true,
			},
		});

		return product;
	} catch {
		return null;
	}
}

export async function getProductTags() {
	try {
		const tags = await prisma.productTag.findMany({
			include: {
				translations: true,
			},
		});

		return tags;
	} catch {
		return [];
	}
}

export const newProduct = async (data: ProductSchemaType) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) return { error: "not_logged_in" };

	if (currentUser.role === "USER") return { error: "unauthorized" };

	const validatedFields = ProductSchema.safeParse(data);

	if (!validatedFields.success) return { error: "invalid_data" };

	try {
		// Create the product
		const product = await prisma.product.create({
			data: {
				defaultName: validatedFields.data.defaultName,
				slug: validatedFields.data.slug,
				price: validatedFields.data.price,
				stock: validatedFields.data.stock,
				sku: validatedFields.data.sku,
				barcode: validatedFields.data.barcode,
				status: validatedFields.data.status,
				discountType: validatedFields.data.discountType,
				discountValue: validatedFields.data.discountValue,
				discountStart: validatedFields.data.discountStart,
				discountEnd: validatedFields.data.discountEnd,
				brandId: validatedFields.data.brandId,
				categoryId: validatedFields.data.categoryId,
			},
		});

		// Create translations if provided
		if (validatedFields.data.translations && validatedFields.data.translations.length > 0) {
			for (const translation of validatedFields.data.translations) {
				await prisma.productTranslation.create({
					data: {
						productId: product.id,
						language: translation.language,
						name: translation.name,
						shortDescription: translation.shortDescription,
						description: translation.description,
					},
				});
			}
		}

		// Create images if provided
		if (validatedFields.data.images && validatedFields.data.images.length > 0) {
			for (const image of validatedFields.data.images) {
				await prisma.productImage.create({
					data: {
						productId: product.id,
						url: image.url,
						isMain: image.isMain,
					},
				});
			}
		}

		// Create technical info if provided
		if (validatedFields.data.technicalInfo && validatedFields.data.technicalInfo.length > 0) {
			for (const info of validatedFields.data.technicalInfo) {
				await prisma.technicalInfo.create({
					data: {
						productId: product.id,
						key: info.key,
						value: info.value,
					},
				});
			}
		}

		// Create shipping info if provided
		if (validatedFields.data.shippingInfo) {
			await prisma.shippingInfo.create({
				data: {
					productId: product.id,
					weight: validatedFields.data.shippingInfo.weight,
					width: validatedFields.data.shippingInfo.width,
					height: validatedFields.data.shippingInfo.height,
					depth: validatedFields.data.shippingInfo.depth,
					isFragile: validatedFields.data.shippingInfo.isFragile ?? false,
					freeShipping: validatedFields.data.shippingInfo.freeShipping ?? false,
				},
			});
		}

		// Create variants if provided
		if (validatedFields.data.variants && validatedFields.data.variants.length > 0) {
			for (const variant of validatedFields.data.variants) {
				const newVariant = await prisma.productVariant.create({
					data: {
						productId: product.id,
						name: variant.name,
						sku: variant.sku,
						barcode: variant.barcode,
						price: variant.price,
						stock: variant.stock,
						status: variant.status,
					},
				});

				// Create variant images if provided
				if (variant.images && variant.images.length > 0) {
					for (const image of variant.images) {
						await prisma.productVariantImage.create({
							data: {
								variantId: newVariant.id,
								url: image.url,
								isMain: image.isMain,
							},
						});
					}
				}

				// Create variant translations if provided
				if (variant.translations && variant.translations.length > 0) {
					for (const translation of variant.translations) {
						await prisma.productVariantTranslation.create({
							data: {
								variantId: newVariant.id,
								language: translation.language,
								name: translation.name,
							},
						});
					}
				}

				// Create variant options if provided
				if (variant.options && variant.options.length > 0) {
					for (const option of variant.options) {
						const newOption = await prisma.productVariantOption.create({
							data: {
								variantId: newVariant.id,
								name: option.name,
								value: option.value,
							},
						});

						// Create option translations if provided
						if (option.translations && option.translations.length > 0) {
							for (const translation of option.translations) {
								await prisma.productVariantOptionTranslation.create({
									data: {
										optionId: newOption.id,
										language: translation.language,
										name: translation.name,
										value: translation.value,
									},
								});
							}
						}

						// Create option values if provided
						if (option.values && option.values.length > 0) {
							for (const value of option.values) {
								await prisma.productVariantOptionValue.create({
									data: {
										optionId: newOption.id,
										value: value.value,
									},
								});
							}
						}
					}
				}
			}
		}

		// Connect tags if provided
		if (validatedFields.data.tagIds && validatedFields.data.tagIds.length > 0) {
			await prisma.product.update({
				where: { id: product.id },
				data: {
					tags: {
						connect: validatedFields.data.tagIds.map((id) => ({ id })),
					},
				},
			});
		}

		// Connect related products if provided
		if (validatedFields.data.relatedProductIds && validatedFields.data.relatedProductIds.length > 0) {
			// You'll need to use the correct relation field name from your Prisma schema
			// Common names might be "relatedTo" or similar
			await prisma.product.update({
				where: { id: product.id },
				data: {
					// Using the correct relation field name from Prisma schema
					relatedProducts: {
						connect: validatedFields.data.relatedProductIds.map((id) => ({ id })),
					},
				},
			});
		}

		return { success: "product_created", productId: product.id };
	} catch (error) {
		console.error("Error creating product:", error);
		return { error: "something_went_wrong" };
	}
};

export const deleteProduct = async (productId: string) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) return { error: "not_logged_in" };

	if (currentUser.role === "USER") return { error: "unauthorized" };

	const product = await prisma.product.findUnique({
		where: { id: productId },
	});

	if (!product) return { error: "product_not_found" };

	try {
		await prisma.product.delete({
			where: { id: productId },
		});

		return { success: "product_deleted" };
	} catch {
		return { error: "something_went_wrong" };
	}
};

export const createProductTag = async (data: { name: string, slug: string }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  try {
    // Check if tag with the same name or slug already exists
    const existingTag = await prisma.productTag.findFirst({
      where: {
        OR: [
          { name: data.name },
          { slug: data.slug }
        ]
      }
    });

    if (existingTag) {
      return { error: "tag_already_exists" };
    }

    // Create the tag
    const tag = await prisma.productTag.create({
      data: {
        name: data.name,
        slug: data.slug,
      },
      include: {
        translations: true
      }
    });

    return { success: "tag_created", tagId: tag.id, tag };
  } catch (error) {
    console.error("Error creating tag:", error);
    return { error: "something_went_wrong" };
  }
};

export const deleteProductTag = async (tagId: string) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  try {
    // Check if tag exists
    const tag = await prisma.productTag.findUnique({
      where: { id: tagId },
      include: {
        products: true
      }
    });

    if (!tag) return { error: "tag_not_found" };

    // Delete the tag
    await prisma.productTag.delete({
      where: { id: tagId },
    });

    return { success: "tag_deleted" };
  } catch (error) {
    console.error("Error deleting tag:", error);
    return { error: "something_went_wrong" };
  }
};

export const updateProductTag = async (data: { id: string, name: string, slug: string }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  try {
    // Check if tag exists
    const tag = await prisma.productTag.findUnique({
      where: { id: data.id }
    });

    if (!tag) return { error: "tag_not_found" };

    // Check if another tag with the same name or slug already exists
    const existingTag = await prisma.productTag.findFirst({
      where: {
        AND: [
          { id: { not: data.id } },
          { 
            OR: [
              { name: data.name },
              { slug: data.slug }
            ] 
          }
        ]
      }
    });

    if (existingTag) {
      return { error: "tag_already_exists" };
    }

    // Update the tag
    const updatedTag = await prisma.productTag.update({
      where: { id: data.id },
      data: {
        name: data.name,
        slug: data.slug,
      },
      include: {
        translations: true
      }
    });

    return { success: "tag_updated", tag: updatedTag };
  } catch (error) {
    console.error("Error updating tag:", error);
    return { error: "something_went_wrong" };
  }
};

export const updateProductTagTranslations = async (data: { 
  tagId: string, 
  translations: Array<{ language: string, name: string, id?: string }> 
}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  try {
    // Check if tag exists
    const tag = await prisma.productTag.findUnique({
      where: { id: data.tagId },
      include: {
        translations: true
      }
    });

    if (!tag) return { error: "tag_not_found" };

    // Process translations - handle both creates and updates
    if (data.translations && data.translations.length > 0) {
      // Keep track of existing translation IDs to find ones to delete
      const existingTranslationIds = tag.translations.map(t => t.id);
      const updatedTranslationIds: string[] = [];
      
      // Process each translation
      for (const translation of data.translations) {
        if (translation.id) {
          // Update existing translation
          await prisma.productTagTranslation.update({
            where: { id: translation.id },
            data: {
              language: translation.language,
              name: translation.name
            }
          });
          updatedTranslationIds.push(translation.id);
        } else {
          // Check if translation for this language already exists
          const existingTranslation = tag.translations.find(
            t => t.language === translation.language
          );
          
          if (existingTranslation) {
            // Update instead of creating duplicate
            await prisma.productTagTranslation.update({
              where: { id: existingTranslation.id },
              data: {
                name: translation.name
              }
            });
            updatedTranslationIds.push(existingTranslation.id);
          } else {
            // Create new translation
            const newTranslation = await prisma.productTagTranslation.create({
              data: {
                tagId: data.tagId,
                language: translation.language,
                name: translation.name
              }
            });
            updatedTranslationIds.push(newTranslation.id);
          }
        }
      }
      
      // Find translations to delete (those that weren't updated)
      const translationsToDelete = existingTranslationIds.filter(
        id => !updatedTranslationIds.includes(id)
      );
      
      // Delete translations that were removed
      if (translationsToDelete.length > 0) {
        await prisma.productTagTranslation.deleteMany({
          where: {
            id: {
              in: translationsToDelete
            }
          }
        });
      }
    }

    // Return the updated tag with its translations
    const updatedTag = await prisma.productTag.findUnique({
      where: { id: data.tagId },
      include: {
        translations: true
      }
    });

    return { success: "translations_updated", tag: updatedTag };
  } catch (error) {
    console.error("Error updating tag translations:", error);
    return { error: "something_went_wrong" };
  }
};

export const updateProductVariantTranslations = async (data: { 
  variantId: string, 
  translations: Array<{ language: string, name: string, id?: string }> 
}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  try {
    // Check if variant exists
    const variant = await prisma.productVariant.findUnique({
      where: { id: data.variantId },
      include: {
        ProductVariantTranslation: true
      }
    });

    if (!variant) return { error: "variant_not_found" };

    // Process translations - handle both creates and updates
    if (data.translations && data.translations.length > 0) {
      // Keep track of existing translation IDs to find ones to delete
      const existingTranslationIds = variant.ProductVariantTranslation.map(t => t.id);
      const updatedTranslationIds: string[] = [];
      
      // Process each translation
      for (const translation of data.translations) {
        if (translation.id) {
          // Update existing translation
          await prisma.productVariantTranslation.update({
            where: { id: translation.id },
            data: {
              language: translation.language,
              name: translation.name
            }
          });
          updatedTranslationIds.push(translation.id);
        } else {
          // Check if translation for this language already exists
          const existingTranslation = variant.ProductVariantTranslation.find(
            t => t.language === translation.language
          );
          
          if (existingTranslation) {
            // Update instead of creating duplicate
            await prisma.productVariantTranslation.update({
              where: { id: existingTranslation.id },
              data: {
                name: translation.name
              }
            });
            updatedTranslationIds.push(existingTranslation.id);
          } else {
            // Create new translation
            const newTranslation = await prisma.productVariantTranslation.create({
              data: {
                variantId: data.variantId,
                language: translation.language,
                name: translation.name
              }
            });
            updatedTranslationIds.push(newTranslation.id);
          }
        }
      }
      
      // Find translations to delete (those that weren't updated)
      const translationsToDelete = existingTranslationIds.filter(
        id => !updatedTranslationIds.includes(id)
      );
      
      // Delete translations that were removed
      if (translationsToDelete.length > 0) {
        await prisma.productVariantTranslation.deleteMany({
          where: {
            id: {
              in: translationsToDelete
            }
          }
        });
      }
    }

    // Return the updated variant with its translations
    const updatedVariant = await prisma.productVariant.findUnique({
      where: { id: data.variantId },
      include: {
        ProductVariantTranslation: true
      }
    });

    return { success: "translations_updated", variant: updatedVariant };
  } catch (error) {
    console.error("Error updating variant translations:", error);
    return { error: "something_went_wrong" };
  }
};

export const updateProductVariantOptionTranslations = async (data: { 
  optionId: string, 
  translations: Array<{ language: string, name: string, value: string, id?: string }> 
}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  try {
    // Check if option exists
    const option = await prisma.productVariantOption.findUnique({
      where: { id: data.optionId },
      include: {
        translations: true
      }
    });

    if (!option) return { error: "option_not_found" };

    // Process translations - handle both creates and updates
    if (data.translations && data.translations.length > 0) {
      // Keep track of existing translation IDs to find ones to delete
      const existingTranslationIds = option.translations.map(t => t.id);
      const updatedTranslationIds: string[] = [];
      
      // Process each translation
      for (const translation of data.translations) {
        if (translation.id) {
          // Update existing translation
          await prisma.productVariantOptionTranslation.update({
            where: { id: translation.id },
            data: {
              language: translation.language,
              name: translation.name,
              value: translation.value
            }
          });
          updatedTranslationIds.push(translation.id);
        } else {
          // Check if translation for this language already exists
          const existingTranslation = option.translations.find(
            t => t.language === translation.language
          );
          
          if (existingTranslation) {
            // Update instead of creating duplicate
            await prisma.productVariantOptionTranslation.update({
              where: { id: existingTranslation.id },
              data: {
                name: translation.name,
                value: translation.value
              }
            });
            updatedTranslationIds.push(existingTranslation.id);
          } else {
            // Create new translation
            const newTranslation = await prisma.productVariantOptionTranslation.create({
              data: {
                optionId: data.optionId,
                language: translation.language,
                name: translation.name,
                value: translation.value
              }
            });
            updatedTranslationIds.push(newTranslation.id);
          }
        }
      }
      
      // Find translations to delete (those that weren't updated)
      const translationsToDelete = existingTranslationIds.filter(
        id => !updatedTranslationIds.includes(id)
      );
      
      // Delete translations that were removed
      if (translationsToDelete.length > 0) {
        await prisma.productVariantOptionTranslation.deleteMany({
          where: {
            id: {
              in: translationsToDelete
            }
          }
        });
      }
    }

    // Return the updated option with its translations
    const updatedOption = await prisma.productVariantOption.findUnique({
      where: { id: data.optionId },
      include: {
        translations: true
      }
    });

    return { success: "translations_updated", option: updatedOption };
  } catch (error) {
    console.error("Error updating variant option translations:", error);
    return { error: "something_went_wrong" };
  }
};

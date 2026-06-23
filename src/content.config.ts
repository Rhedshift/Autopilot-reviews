import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/reviews" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string(),
		category: z.string(),
		rating: z.number().min(0).max(5),
		pros: z.array(z.string()),
		cons: z.array(z.string()),
		affiliateLink: z.string(),
		bestFor: z.string().optional(),
		featured: z.boolean().default(false),
	}),
});

const categories = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/categories" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { reviews, categories };
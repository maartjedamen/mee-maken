import { defineCollection, z } from "astro:content";

const denken = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    series: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.string().optional(),
    externalUrl: z.string().url().optional(),
    externalLabel: z.string().optional(),

  }),
});

// Helper: strict YYYY-MM (e.g., 2025-07)
const ym = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Use YYYY-MM (e.g., 2025-07)");

const cv = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    items: z.array(
      z.object({
        start: ym,
        years: z.string(),
        title: z.string(),
        summary: z.string().optional(),

        bucket: z.enum([
          "work",
          "education",
          "sport",
          "courses",
          "volunteer",
          "hobby",
          "research",
        ]),

        body: z.array(z.string()).optional(),

        link: z
          .object({
            href: z.string(),
            label: z.string(),
          })
          .optional(),

        image: z.string().optional(),

        media: z
          .array(
            z.object({
              type: z.enum(["image", "pdf"]),
              src: z.string(), // local paths like "/portfolio/..."
              label: z.string().optional(),
            })
          )
          .optional(),
      })
    ),
  }),
});

export const collections = {
  denken,
  cv,
  producten: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      status: z.enum(["actief", "in-ontwikkeling", "idee"]).optional(),
      tags: z.array(z.string()).optional(),
      cta: z
        .object({
          label: z.string(),
          href: z.string(),
        })
        .optional(),
      relatedThinking: z.array(z.string()).optional(),
      order: z.number().optional(),
      type: z.string().optional(),
      audience: z.array(z.string()).optional(),
      image: z.string().optional(),
      heroImage: z.string().optional(),
      images: z.array(z.string()).optional(),
    }),
  }),
  events: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      cadence: z.enum(["wekelijks", "periodiek", "jaarlijks", "onregelmatig"]).optional(),
      status: z.enum(["actief", "in-ontwikkeling", "archief"]).optional(),
      tags: z.array(z.string()).optional(),
      cta: z
        .object({
          label: z.string(),
          href: z.string(),
        })
        .optional(),
      relatedThinking: z.array(z.string()).optional(),
      order: z.number().optional(),
      image: z.string().optional(),
      heroImage: z.string().optional(),
    }),
  }),
};
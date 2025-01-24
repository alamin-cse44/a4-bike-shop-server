import { z } from 'zod';

const createProductValidaitonSchema = z.object({
  body: z.object({
    title: z.string().min(5).max(255),
    content: z.string().min(20).max(5000),
  }),
});


const updateProductValidaitonSchema = z.object({
  body: z.object({
    title: z.string().min(5).max(255).optional(),
    content: z.string().min(20).max(5000).optional(),
  }),
});

export const BlogValidations = {
  createProductValidaitonSchema,
  updateProductValidaitonSchema,
};

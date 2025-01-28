import { z } from 'zod';

const createBikeValidaitonSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(20),
    brand: z.string().min(3).max(20),
    price: z.number().min(1).max(1000000),
    model: z.string({ required_error: 'required' }),
    quantity: z.number().min(1).max(500),
  }),
});

const updateBikeValidaitonSchema = z.object({
  body: z.object({
    name: z.string().min(5).max(20).optional(),
    brand: z.string().min(5).max(20).optional(),
    price: z.number().min(1).max(1000000).optional(),
    model: z.string({ required_error: 'required' }).optional(),
    quantity: z.number().min(1).max(100).optional(),
  }),
});

export const BikeValidations = {
  createBikeValidaitonSchema,
  updateBikeValidaitonSchema,
};

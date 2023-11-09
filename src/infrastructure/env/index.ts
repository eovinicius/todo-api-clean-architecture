import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().optional().default(3333),
});

export const env = envSchema.parse(process.env);

import { z } from 'zod'


export const ProjectSchema = z.object({
  name: z.string('Name cannot be a number').max(30, 'Name cannot be over 30 characters long').min(3, 'Name cannot be under 3 characters long').nonoptional('Name is required'),
  
})
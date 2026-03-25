'use server';
/**
 * @fileOverview An AI agent that generates detailed project descriptions, tech stacks, and keywords
 *               based on a brief project title and bullet points for the WELLDROPP portfolio.
 *
 * - generateAIProjectDescription - A function that handles the project description generation process.
 * - AIProjectDescriptionGeneratorInput - The input type for the generateAIProjectDescription function.
 * - AIProjectDescriptionGeneratorOutput - The return type for the generateAIProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIProjectDescriptionGeneratorInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project.'),
  projectBulletPoints: z
    .array(z.string())
    .describe('A list of key features or goals for the project.'),
});
export type AIProjectDescriptionGeneratorInput = z.infer<
  typeof AIProjectDescriptionGeneratorInputSchema
>;

const AIProjectDescriptionGeneratorOutputSchema = z.object({
  detailedDescription: z.string().describe('A comprehensive and engaging project description.'),
  techStack: z
    .array(z.string())
    .describe('A list of relevant technologies that would typically be used for this project.'),
  keywords: z
    .array(z.string())
    .describe('A list of relevant keywords for SEO and categorization.'),
});
export type AIProjectDescriptionGeneratorOutput = z.infer<
  typeof AIProjectDescriptionGeneratorOutputSchema
>;

export async function generateAIProjectDescription(
  input: AIProjectDescriptionGeneratorInput
): Promise<AIProjectDescriptionGeneratorOutput> {
  return aiProjectDescriptionGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiProjectDescriptionGeneratorPrompt',
  input: {schema: AIProjectDescriptionGeneratorInputSchema},
  output: {schema: AIProjectDescriptionGeneratorOutputSchema},
  prompt: `You are an expert project manager and content strategist for a software development and AI solutions startup named WELLDROPP.
Your task is to generate a detailed project description, a potential tech stack, and relevant keywords for a new project being added to the company's portfolio.

The goal is to quickly and consistently showcase our work, attracting clients and highlighting technical expertise.

Project Title: {{{projectTitle}}}
Project Key Points:
{{#each projectBulletPoints}}- {{{this}}}
{{/each}}

Based on the above, provide a comprehensive project description, a suitable tech stack, and a list of keywords. Make sure the output is in the specified JSON format.`,
});

const aiProjectDescriptionGeneratorFlow = ai.defineFlow(
  {
    name: 'aiProjectDescriptionGeneratorFlow',
    inputSchema: AIProjectDescriptionGeneratorInputSchema,
    outputSchema: AIProjectDescriptionGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

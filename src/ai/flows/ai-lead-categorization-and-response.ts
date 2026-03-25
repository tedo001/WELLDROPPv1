'use server';
/**
 * @fileOverview This file implements a Genkit flow for categorizing lead inquiries
 * and generating draft responses. It is used to process contact form submissions
 * from the WELLDROPP website.
 *
 * - aiLeadCategorizationAndResponse - The main function to call this flow.
 * - AILeadCategorizationAndResponseInput - The input type for the flow.
 * - AILeadCategorizationAndResponseOutput - The output type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AILeadCategorizationAndResponseInputSchema = z.object({
  name: z.string().describe('The name of the lead submitting the contact form.'),
  email: z.string().email().describe('The email address of the lead.'),
  message: z.string().describe('The message content from the lead inquiry.'),
});
export type AILeadCategorizationAndResponseInput = z.infer<typeof AILeadCategorizationAndResponseInputSchema>;

const AILeadCategorizationAndResponseOutputSchema = z.object({
  category: z
    .enum([
      'AI Agent Development',
      'AI Chatbot Services',
      'LLM Solutions',
      'E-commerce Websites & Applications',
      'Data Analytics Dashboards',
      'Data Management Systems',
      'Website Development',
      'Data Automation Applications',
      'Partnership Inquiry',
      'General Inquiry',
      'Other',
    ])
    .describe('The categorized type of the lead inquiry.'),
  draftResponse: z
    .string()
    .describe('A draft AI-generated response tailored to the lead inquiry.'),
});
export type AILeadCategorizationAndResponseOutput = z.infer<typeof AILeadCategorizationAndResponseOutputSchema>;

export async function aiLeadCategorizationAndResponse(
  input: AILeadCategorizationAndResponseInput
): Promise<AILeadCategorizationAndResponseOutput> {
  return aiLeadCategorizationAndResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeLeadAndRespondPrompt',
  input: { schema: AILeadCategorizationAndResponseInputSchema },
  output: { schema: AILeadCategorizationAndResponseOutputSchema },
  prompt: `You are an AI assistant for WELLDROPP, a software development and AI solutions startup.
Your task is to categorize an incoming lead inquiry message into one of the following categories:
- 'AI Agent Development'
- 'AI Chatbot Services'
- 'LLM Solutions'
- 'E-commerce Websites & Applications'
- 'Data Analytics Dashboards'
- 'Data Management Systems'
- 'Website Development'
- 'Data Automation Applications'
- 'Partnership Inquiry'
- 'General Inquiry'
- 'Other'

After categorizing, generate a polite, professional, and personalized draft response to the lead. The response should acknowledge their inquiry, briefly express interest in their project/request, and suggest the next steps (e.g., scheduling a call, providing more details).

Lead Name: {{{name}}}
Lead Email: {{{email}}}
Lead Message: {{{message}}}

---

Based on the above, provide the category and a draft response.`,
});

const aiLeadCategorizationAndResponseFlow = ai.defineFlow(
  {
    name: 'aiLeadCategorizationAndResponseFlow',
    inputSchema: AILeadCategorizationAndResponseInputSchema,
    outputSchema: AILeadCategorizationAndResponseOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to categorize lead or generate response.');
    }
    return output;
  }
);

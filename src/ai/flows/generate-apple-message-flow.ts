'use server';

/**
 * @fileOverview A flow to generate a funny message for buying apples using GenAI.
 *
 * - generateAppleMessage - A function that handles the apple message generation.
 * - GenerateAppleMessageInput - The input type for the generateAppleMessage function.
 * - GenerateAppleMessageOutput - The return type for the generateAppleMessage function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateAppleMessageInputSchema = z.object({
  appleCount: z.number().describe('The number of apples the user wants to buy.'),
});
export type GenerateAppleMessageInput = z.infer<typeof GenerateAppleMessageInputSchema>;

const GenerateAppleMessageOutputSchema = z.object({
  message: z.string().describe('A funny and casual message related to buying apples.'),
});
export type GenerateAppleMessageOutput = z.infer<typeof GenerateAppleMessageOutputSchema>;

export async function generateAppleMessage(input: GenerateAppleMessageInput): Promise<GenerateAppleMessageOutput> {
  return generateAppleMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAppleMessagePrompt',
  input: {
    schema: z.object({
      appleCount: z.number().describe('The number of apples the user wants to buy.'),
    }),
  },
  output: {
    schema: z.object({
      message: z.string().describe('A funny and casual message related to buying apples.'),
    }),
  },
  prompt: `Create a funny, casual text, given that the user wants to buy {{appleCount}} amount of apples. Be creative! It can be a very deep-funny reflection, or it can be a funny-sarcastic message to the user, whatever you prefer.`,
});

const generateAppleMessageFlow = ai.defineFlow<
  typeof GenerateAppleMessageInputSchema,
  typeof GenerateAppleMessageOutputSchema
>(
  {
    name: 'generateAppleMessageFlow',
    inputSchema: GenerateAppleMessageInputSchema,
    outputSchema: GenerateAppleMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

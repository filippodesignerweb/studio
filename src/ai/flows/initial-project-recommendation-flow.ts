'use server';
/**
 * @fileOverview An AI agent that provides initial recommendations for LED panel solutions
 * based on user-provided project details.
 *
 * - initialProjectRecommendation - A function that handles the LED panel project recommendation process.
 * - InitialProjectRecommendationInput - The input type for the initialProjectRecommendation function.
 * - InitialProjectRecommendationOutput - The return type for the initialProjectRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InitialProjectRecommendationInputSchema = z.object({
  projectType: z
    .string()
    .describe('The type of LED panel project (e.g., luxury residence, commercial facade, bar/restaurant, special event).'),
  approximateSize: z
    .string()
    .describe('The approximate size or dimensions of the desired LED panel (e.g., "5m x 3m", "10 square meters", "large").'),
  useEnvironment: z
    .enum(['indoor', 'outdoor', 'both'])
    .describe('The environment where the LED panel will be used (indoor, outdoor, or both).'),
  additionalNotes: z
    .string()
    .optional()
    .describe('Any additional notes or specific requirements for the project.'),
});
export type InitialProjectRecommendationInput = z.infer<typeof InitialProjectRecommendationInputSchema>;

const InitialProjectRecommendationOutputSchema = z.object({
  recommendedSolution: z
    .string()
    .describe('An AI-generated recommendation for suitable LED panel solutions based on the input.'),
  estimatedScope: z
    .string()
    .describe('An AI-generated estimated project scope, including potential considerations and next steps.'),
});
export type InitialProjectRecommendationOutput = z.infer<typeof InitialProjectRecommendationOutputSchema>;

export async function initialProjectRecommendation(
  input: InitialProjectRecommendationInput
): Promise<InitialProjectRecommendationOutput> {
  return initialProjectRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'initialProjectRecommendationPrompt',
  input: {schema: InitialProjectRecommendationInputSchema},
  output: {schema: InitialProjectRecommendationOutputSchema},
  prompt: `You are an expert in LED panel solutions for the company LED 4U.
Your task is to provide an initial recommendation for suitable LED panel solutions and an estimated project scope
based on the client's input.

Project Type: {{{projectType}}}
Approximate Size: {{{approximateSize}}}
Use Environment: {{{useEnvironment}}}
{{#if additionalNotes}}
Additional Notes: {{{additionalNotes}}}
{{/if}}

Based on the information above, please provide:
1. A recommended LED panel solution, considering factors like brightness, durability, pixel pitch, and modularity, suitable for the specified project type and environment.
2. An estimated project scope, including what the next steps would typically involve for a project of this nature (e.g., detailed technical analysis, site visit, custom design, installation, support).`,
});

const initialProjectRecommendationFlow = ai.defineFlow(
  {
    name: 'initialProjectRecommendationFlow',
    inputSchema: InitialProjectRecommendationInputSchema,
    outputSchema: InitialProjectRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

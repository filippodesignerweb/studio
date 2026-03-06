'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Sparkles, Send } from 'lucide-react';
import { initialProjectRecommendation } from '@/ai/flows/initial-project-recommendation-flow';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const formSchema = z.object({
  projectType: z.string().min(1, 'Selecione o tipo de projeto'),
  approximateSize: z.string().min(1, 'Informe o tamanho aproximado'),
  useEnvironment: z.enum(['indoor', 'outdoor', 'both']),
  additionalNotes: z.string().optional(),
});

export function AIProjectAssistant() {
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    solution: string;
    scope: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: '',
      approximateSize: '',
      useEnvironment: 'indoor',
      additionalNotes: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const result = await initialProjectRecommendation(values);
      setRecommendation({
        solution: result.recommendedSolution,
        scope: result.estimatedScope,
      });
    } catch (error) {
      console.error('AI Flow Error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="assistant" className="py-24 bg-dark relative overflow-hidden">
      <div className="container max-w-[1360px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6 bg-primary/5">
            <Sparkles className="w-3 h-3" /> Assistente Inteligente LED 4U
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">
            Receba uma Recomendação <br /> <span className="text-gradient-animate">Instantânea</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-body">
            Nossa IA analisa seu projeto em segundos para sugerir a melhor tecnologia de painel e os próximos passos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="glass-card border-none bg-white/[0.03]">
            <CardHeader>
              <CardTitle className="text-white font-headline">Detalhes do Projeto</CardTitle>
              <CardDescription className="text-white/50">
                Preencha os campos abaixo para que nosso assistente possa analisar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Tipo de Projeto</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-primary">
                              <SelectValue placeholder="Ex: Fachada Comercial, Residência..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-dark border-white/10 text-white">
                            <SelectItem value="Residência de Luxo">Residência de Luxo</SelectItem>
                            <SelectItem value="Fachada Comercial">Fachada Comercial</SelectItem>
                            <SelectItem value="Bar/Restaurante">Bar ou Restaurante</SelectItem>
                            <SelectItem value="Evento Corporativo">Evento Corporativo</SelectItem>
                            <SelectItem value="Painel Publicitário">Painel Publicitário (Billboard)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="approximateSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Tamanho Estimado (m² ou dimensões)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: 5m x 3m ou 10m2"
                            {...field}
                            className="bg-white/5 border-white/10 text-white focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="useEnvironment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Ambiente de Uso</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-primary">
                              <SelectValue placeholder="Selecione o ambiente" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-dark border-white/10 text-white">
                            <SelectItem value="indoor">Interno (Indoor)</SelectItem>
                            <SelectItem value="outdoor">Externo (Outdoor)</SelectItem>
                            <SelectItem value="both">Híbrido (Interno/Externo)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Notas Adicionais</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva detalhes específicos ou necessidades especiais..."
                            className="bg-white/5 border-white/10 text-white min-h-[100px] focus:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-headline py-6"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Analisar Projeto <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="min-h-[500px] flex flex-col">
            {recommendation ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <Card className="glass-card border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-primary font-headline flex items-center gap-2">
                      <Sparkles className="w-5 h-5" /> Solução Recomendada
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/90 leading-relaxed font-body whitespace-pre-wrap">
                    {recommendation.solution}
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10 bg-white/5">
                  <CardHeader>
                    <CardTitle className="text-white font-headline">Escopo Estimado</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/70 leading-relaxed font-body whitespace-pre-wrap">
                    {recommendation.scope}
                  </CardContent>
                </Card>

                <div className="pt-4">
                  <Button
                    onClick={() => window.open('https://wa.me/55999999999', '_blank')}
                    className="w-full bg-[#25D366] hover:bg-[#1ebc59] text-white font-headline py-6 flex items-center gap-2"
                  >
                    Falar com Especialista Agora
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex-1 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-12 text-center text-white/30">
                <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                <p className="font-headline text-sm uppercase tracking-widest">
                  Aguardando sua análise...
                </p>
                <p className="mt-2 text-xs font-body">
                  Preencha o formulário para gerar sua proposta inicial.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

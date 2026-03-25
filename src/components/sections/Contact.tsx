
"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form"
import { aiLeadCategorizationAndResponse } from "@/ai/flows/ai-lead-categorization-and-response"
import { useToast } from "@/hooks/use-toast"
import { Send, MessageSquare, Mail } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [aiDraft, setAiDraft] = React.useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Simulate/Trigger AI flow for response generation (internal)
      const result = await aiLeadCategorizationAndResponse(values)
      
      toast({
        title: "Message Sent Successfully!",
        description: "Our AI is processing your inquiry as: " + result.category,
      })
      
      setAiDraft(result.draftResponse)
      form.reset()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Let's Build <br />
              <span className="text-gradient">Something Smart</span> <br />
              Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to automate your workflows or integrate AI into your systems? Reach out today for a free consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email us</div>
                  <div className="font-semibold">hello@welldropp.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="text-green-500" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold">+91 98765 43210</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 glass border border-white/5 rounded-3xl bg-glow">
               <p className="italic text-muted-foreground text-sm">
                 "Trusted for building scalable AI solutions and intelligent software systems for the modern era."
               </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="glass border-white/10 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="glass border-white/10 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            {...field} 
                            className="glass border-white/10 min-h-[150px] resize-none" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-14 rounded-2xl text-lg font-bold bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Send Message"}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Form>

              {aiDraft && (
                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 animate-fade-in-up">
                  <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">AI Categorization Success</p>
                  <p className="text-sm text-foreground/80 leading-relaxed italic">
                    "Thank you for reaching out! We've received your inquiry and our AI has already pre-processed it for our engineering team."
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

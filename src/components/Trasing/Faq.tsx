"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What workload can I expect if I enroll in this diploma?",
    answer: "The workload varies depending on the specific diploma program, but typically you can expect 15-20 hours of study per week, including lectures, assignments, and self-study.",
  },
  {
    question: "What career options will I have with this diploma?",
    answer: "Career options depend on the specific diploma, but generally include entry-level positions in the related field, opportunities for advancement in current roles, or a foundation for further education.",
  },
  {
    question: "How does the online format work?",
    answer: "The online format typically includes a mix of live virtual classes, pre-recorded lectures, online assignments, and discussion forums. You'll have access to course materials 24/7 and can often work at your own pace within set deadlines.",
  },
  // Add more FAQ items to reach a total of 16
  // ... (13 more items would be added here in a real application)
]

export default function Component() {
  const [showAll, setShowAll] = useState(false)
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3)

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Frequently asked questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {displayedFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
              <AccordionTrigger className="text-left py-4 flex justify-between items-center w-full">
                <span className="text-base font-medium pr-8">{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {!showAll && (
          <Button
            variant="link"
            className="mt-4 text-primary hover:text-primary/80"
            onClick={() => setShowAll(true)}
          >
            Show all 16 frequently asked questions
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
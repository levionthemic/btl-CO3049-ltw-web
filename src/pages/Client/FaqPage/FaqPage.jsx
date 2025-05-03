import { useEffect, useState } from 'react'
import { fetchAllFaqsAPI } from '~/apis'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'

function FaqPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchAllFaqsAPI().then(res => setData(res.data.data))
  }, [])

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="space-y-4">
        {data.map(d => (
          <AccordionItem key={d.id} value={d.id}>
            <AccordionTrigger>{d.question}</AccordionTrigger>
            <AccordionContent>{d.answer}</AccordionContent>
          </AccordionItem>
        ))}

      </Accordion>
    </div>
  )
}

export default FaqPage
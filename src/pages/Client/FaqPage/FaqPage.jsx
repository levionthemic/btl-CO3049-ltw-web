
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'

function FaqPage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Levi?</AccordionTrigger>
          <AccordionContent>
          Levi is a hotel booking website where you can easily find and reserve rooms at the best prices.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I book a hotel?</AccordionTrigger>
          <AccordionContent>
          Simply search for your destination, select your preferred hotel, and complete the booking through our secure checkout process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I cancel or modify my booking?</AccordionTrigger>
          <AccordionContent>
          Yes, depending on the hotel&apos;s cancellation policy. Please check your booking details or contact our support team for assistance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How can I contact support?</AccordionTrigger>
          <AccordionContent>
          You can reach out to our support team via the &quot;Contact Us&quot; page, available 24/7 to assist you.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FaqPage
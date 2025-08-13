'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { faqData } from '../../mocks/faqData';

const CustomAccordion: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((faq) => (
        <AccordionItem
          key={faq.id}
          className="border-b dark:border-gray-100/10"
          value={faq.id.toString()}
        >
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;

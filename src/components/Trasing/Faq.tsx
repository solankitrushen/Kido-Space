import React, { useState } from 'react';

// Utility function for combining class names
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Card components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn('rounded-lg bg-white shadow-md', className)} {...props} />
);

const CardHeader: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props} />
);

const CardTitle: React.FC<CardProps> = ({ className, ...props }) => (
  <h2 className={cn('text-2xl font-bold', className)} {...props} />
);

const CardContent: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn('px-6 py-4', className)} {...props} />
);

// Accordion components
interface AccordionProps {
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => (
  <div className="divide-y divide-gray-200">{children}</div>
);

const AccordionItem: React.FC<AccordionProps> = ({ children }) => (
  <div className="py-4">{children}</div>
);

interface AccordionTriggerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  isOpen,
  onClick,
}) => (
  <button
    className="flex w-full items-center justify-between text-left"
    onClick={onClick}
  >
    <span className="pr-8 text-base font-medium">{children}</span>
    <ChevronIcon
      className={cn(
        'h-5 w-5 transition-transform duration-200',
        isOpen ? 'rotate-180 transform' : '',
      )}
    />
  </button>
);

interface AccordionContentProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isOpen,
}) => (
  <div className={cn('mt-2 text-sm text-gray-600', isOpen ? 'block' : 'hidden')}>
    {children}
  </div>
);

// Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => (
  <button
    className={cn('font-medium text-blue-600 hover:text-blue-800', className)}
    {...props}
  />
);

// ChevronIcon component
interface ChevronIconProps {
  className?: string;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// FAQ component
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What workload can I expect if I enroll in this diploma?',
    answer:
      'The workload varies depending on the specific diploma program, but typically you can expect 15-20 hours of study per week, including lectures, assignments, and self-study.',
  },
  {
    question: 'What career options will I have with this diploma?',
    answer:
      'Career options depend on the specific diploma, but generally include entry-level positions in the related field, opportunities for advancement in current roles, or a foundation for further education.',
  },
  {
    question: 'How does the online format work?',
    answer:
      "The online format typically includes a mix of live virtual classes, pre-recorded lectures, online assignments, and discussion forums. You'll have access to course materials 24/7 and can often work at your own pace within set deadlines.",
  },
  // Add more FAQ items to reach a total of 16
  // ... (13 more items would be added here in a real application)
];

const FAQComponent: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [openItem, setOpenItem] = useState<number | null>(null);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <Card className="mx-auto w-full max-w-3xl text-black dark:bg-navy-800 dark:text-white">
      <CardHeader>
        <CardTitle>Frequently asked questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion>
          {displayedFaqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionTrigger
                isOpen={openItem === index}
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent isOpen={openItem === index}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button className="mt-4" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show less' : 'Show all 16 frequently asked questions'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FAQComponent;

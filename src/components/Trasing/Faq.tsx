import React, { useState } from 'react';

// Utility function for combining class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Card components
const Card = ({ className, ...props }) => (
  <div className={cn('rounded-lg bg-white shadow-md', className)} {...props} />
);

const CardHeader = ({ className, ...props }) => (
  <div className={cn('px-6 py-4', className)} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h2 className={cn('text-2xl font-bold', className)} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={cn('px-6 py-4', className)} {...props} />
);

// Accordion components
const Accordion = ({ children }) => (
  <div className="divide-y divide-gray-200">{children}</div>
);

const AccordionItem = ({ children }) => <div className="py-4">{children}</div>;

const AccordionTrigger = ({ children, isOpen, onClick }) => (
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

const AccordionContent = ({ children, isOpen }) => (
  <div
    className={cn('mt-2 text-sm text-gray-600', isOpen ? 'block' : 'hidden')}
  >
    {children}
  </div>
);

// Button component
const Button = ({ className, ...props }) => (
  <button
    className={cn('font-medium text-blue-600 hover:text-blue-800', className)}
    {...props}
  />
);

// ChevronIcon component
const ChevronIcon = ({ className }) => (
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
const faqs = [
  {
    question: 'What is the solar system?',
    answer:
      'The solar system is a collection of planets, moons, asteroids, comets, and other celestial bodies that orbit around the Sun, which is located at the center of the system.',
  },
  {
    question: 'How many planets are in the solar system?',
    answer:
      'There are eight planets in the solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.',
  },
  {
    question: 'Why is Pluto no longer considered a planet?',
    answer:
      'Pluto was reclassified as a "dwarf planet" in 2006 by the International Astronomical Union because it does not meet all the criteria for being a full-fledged planet.',
  },
  {
    question: 'What is the largest planet in the solar system?',
    answer:
      'Jupiter is the largest planet in the solar system, with a diameter of about 142,984 km (88,846 miles), making it more than 11 times wider than Earth.',
  },
  {
    question: 'What is the asteroid belt?',
    answer:
      'The asteroid belt is a region of space located between the orbits of Mars and Jupiter, where most of the solar system’s asteroids are found.',
  },
  {
    question: 'What is a comet?',
    answer:
      'A comet is a small celestial body made of ice, dust, and rock that orbits the Sun. When close to the Sun, a comet develops a glowing coma and a tail.',
  },
  {
    question: 'How old is the solar system?',
    answer:
      'The solar system is approximately 4.6 billion years old, having formed from a cloud of gas and dust.',
  },
  {
    question: 'What is a solar eclipse?',
    answer:
      'A solar eclipse occurs when the Moon passes between the Earth and the Sun, temporarily blocking the Sun’s light.',
  },
  {
    question: 'What is the Kuiper Belt?',
    answer:
      'The Kuiper Belt is a region beyond Neptune that contains small icy bodies, including dwarf planets like Pluto, and comets.',
  },
  {
    question: 'How does gravity work in the solar system?',
    answer:
      'Gravity is the force that keeps planets, moons, and other objects in the solar system in orbit around the Sun. The Sun’s massive gravity holds the solar system together.',
  },
  {
    question: 'What are the gas giants?',
    answer:
      'The gas giants are Jupiter, Saturn, Uranus, and Neptune. These planets are primarily made of hydrogen and helium, and are much larger than the rocky planets.',
  },
  {
    question: 'How long does it take sunlight to reach Earth?',
    answer:
      'It takes approximately 8 minutes and 20 seconds for sunlight to travel from the Sun to Earth, a distance of about 93 million miles (150 million kilometers).',
  },
  {
    question: 'What is the difference between a meteor, meteoroid, and meteorite?',
    answer:
      'A meteoroid is a small space rock traveling through space. When it enters Earth’s atmosphere and burns up, it’s called a meteor. If it survives the atmosphere and lands on Earth, it becomes a meteorite.',
  },
  {
    question: 'Why do the planets orbit the Sun?',
    answer:
      'The planets orbit the Sun due to the Sun’s gravitational pull, which keeps them in consistent, elliptical orbits around it.',
  },
  {
    question: 'What are the terrestrial planets?',
    answer:
      'The terrestrial planets are Mercury, Venus, Earth, and Mars. These are rocky planets with solid surfaces, unlike the gas giants.',
  },
  {
    question: 'What is the Oort Cloud?',
    answer:
      'The Oort Cloud is a distant, spherical shell of icy objects that surrounds the solar system. It’s believed to be the source of long-period comets.',
  }
];


export default function FAQComponent() {
  const [showAll, setShowAll] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <Card className="mx-auto w-full max-w-3xl text-black dark:bg-navy-800 dark:text-white ">
      <CardHeader className={'text-black'}>
        <CardTitle className={'text-black'}>Frequently asked questions</CardTitle>
      </CardHeader>
      <CardContent className={'text-black'}>
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
}

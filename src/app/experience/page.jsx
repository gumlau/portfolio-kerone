import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const experiences = [
  {
    company: 'McGill University',
    role: 'Data Science Research Intern',
    timeframe: 'Jun 2025 – Sep 2025',
    location: 'Montréal, Canada',
    summary:
      'Built machine learning pipelines for multitemporal drone imagery to improve crop yield prediction and decision-making for agricultural stakeholders.',
    highlights: [
      'Designed end-to-end data ingestion and preprocessing workflows for hyperspectral datasets.',
      'Benchmarked ensemble models versus physics-informed baselines to quantify yield forecast accuracy.',
    ],
  },
  {
    company: 'Wego Pte Ltd',
    role: 'Business Analyst',
    timeframe: 'Jan 2025 – Jun 2025',
    location: 'Singapore',
    summary:
      'Led strategic analytics initiatives supporting the international launch of a travel intelligence dashboard.',
    highlights: [
      'Partnered with executives to scope KPIs and product requirements for global planning workflows.',
      'Delivered dashboards showcased at industry conferences, achieving a 300% efficiency lift in strategic planning.',
    ],
    link: {
      href: 'https://wego-strategy.vercel.app/',
      label: 'View dashboard',
    },
  },
  {
    company: 'Cuboid.AI',
    role: 'AI Product Developer',
    timeframe: 'Jun 2024 – Aug 2024',
    location: 'Remote',
    summary:
      'Fine-tuned large language models for enterprise user scenarios and launched prototypes recognized in competition finals.',
    highlights: [
      'Implemented retrieval-augmented workflows to boost task completion success in customer support pilots.',
      'Awarded Silver Prize in the Shokz Cup Competition for human-centered AI solution design.',
    ],
  },
  {
    company: 'National University of Singapore',
    role: 'Entrepreneurship & Business Analytics Scholar',
    timeframe: 'Jan 2025 – Jun 2025',
    location: 'Singapore',
    summary:
      'Selected for the NUS NOC inbound programme focused on venture creation, analytics, and product strategy.',
    highlights: [
      'Completed venture labs emphasising lean experimentation and market validation.',
      'Collaborated with cross-cultural teams to prototype data-driven product experiences.',
    ],
  },
]

export const metadata = {
  title: 'Experience',
  description:
    'Professional appointments and immersive programmes spanning data science research, product analytics, and entrepreneurial innovation.',
}

export default function ExperiencePage() {
  return (
    <SimpleLayout
      title="Professional Experience"
      intro="Selected roles and programmes that showcase how I blend technical depth with product strategy across research, startups, and international teams."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2"
      >
        {experiences.map((experience) => (
          <Card as="li" key={`${experience.company}-${experience.role}`}>
            <Card.Eyebrow decorate>{experience.timeframe}</Card.Eyebrow>
            <Card.Title href={experience.link?.href}>{experience.role}</Card.Title>
            <p className="relative z-10 mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {experience.company} • {experience.location}
            </p>
            <Card.Description>{experience.summary}</Card.Description>
            <ul className="relative z-10 mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-[0.35rem] h-1.5 w-1.5 flex-none rounded-full bg-teal-400/80 dark:bg-teal-300/70" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            {experience.link && experience.link.label && (
              <Card.Cta>{experience.link.label}</Card.Cta>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const experiences = [
  {
    company: 'McGill University',
    role: 'Research Intern (Mitacs & CSC Funded)',
    timeframe: 'Jun 2025 – Sep 2025',
    location: 'Montréal, Canada',
    summary:
      'Developing scientific machine learning pipelines that integrate multitemporal drone imagery with agronomic expertise to forecast crop yield and seed quality.',
    highlights: [
      'Designed end-to-end data ingestion, preprocessing, and validation workflows for hyperspectral datasets.',
      'Benchmarked temporal ML models and physics-informed baselines to quantify yield forecast accuracy and model robustness.',
      'Built correlation analyses linking drone-derived features with breeder panel ratings to inform seed selection decisions.',
    ],
  },
  {
    company: 'Wego Pte Ltd',
    role: 'Business Analyst',
    timeframe: 'Jan 2025 – Jun 2025',
    location: 'Singapore',
    summary:
      'Led analytics initiatives to launch a strategic planning dashboard adopted across international business units.',
    highlights: [
      'Designed and built the MVP dashboard from concept to deployment, driving a 300% efficiency improvement in planning workflows.',
      'Created reusable Tableau templates and data source configurations to eliminate repetitive SQL reporting tasks.',
      'Presented market intelligence at WiT conferences in Dubai and Japan, evangelising data-driven strategy.',
    ],
    link: {
      href: 'https://wego-strategy.vercel.app/',
      label: 'View dashboard',
    },
  },
  {
    company: 'National University of Singapore',
    role: 'Entrepreneurship (NUS NOC Inbound Programme)',
    timeframe: 'Jan 2025 – Jun 2025',
    location: 'Singapore',
    summary:
      'Selected for the NUS NOC inbound programme focused on venture creation, analytics, and product strategy.',
    highlights: [
      'Completed venture labs emphasising lean experimentation, market validation, and product strategy.',
      'Collaborated with cross-disciplinary teams on user research, analytics, and UX-driven product concepts.',
      'Coursework: Business Analytics, Venture Creation, Product Strategy, User Experience Design.',
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

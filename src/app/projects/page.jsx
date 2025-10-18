import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Wave-CDAnet: Physics-Informed Neural Network for Water Wave Modeling',
    description:
      'Developed a physics-informed neural network that combines a 3D U-Net encoder with an implicit decoder and Rayleigh–Bénard PDE residual regularization to recover multi-scale wave dynamics at super-resolution.',
    link: { href: '/publications#wave-cdanet', label: 'Publication details' },
  },
  {
    name: 'AI-Powered 3D Visualization System for Ophthalmic Surgery',
    description:
      'Implemented event-based depth estimation and 3D reconstruction from monocular surgical video, coordinating AI engineers and clinicians to deliver prototypes that secured 10,000 RMB innovation funding.',
    link: { href: '/publications#surgmast3r-slam', label: 'Surgical vision research' },
  },
  {
    name: 'Biomimetic AUV and Subsea Cable Recognition System',
    description:
      'Designed a biomimetic autonomous underwater vehicle with synthetic dataset generation and subsea cable recognition, supervised by Academician Lin Jian and funded with 15,000 RMB municipal innovation support.',
    link: { href: 'https://gumlau.github.io/RayVision/', label: 'View project' },
  },
  {
    name: 'Wego Travel Insights Dashboard',
    description:
      'Led the product lifecycle for an enterprise strategic planning dashboard adopted company-wide, delivering a 300% efficiency lift and showcasing insights at WiT conferences in Dubai and Japan.',
    link: { href: 'https://wego-strategy.vercel.app/', label: 'View dashboard' },
  },
  {
    name: 'Lumilib: Curated Knowledge Community Platform',
    description:
      'Founded and scaled a knowledge curation community serving 30,000+ readers with 600+ curated articles guided by the principle “first-hand rather than retold, timeless rather than trending”.',
    link: { href: 'https://www.lumilib.com/main', label: 'Visit Lumilib' },
  },
  {
    name: 'Next.js SEO Blog Starter Template',
    description:
      'Built an open-source Next.js 14 + TypeScript blog starter focused on SEO, mobile responsiveness, and one-click Vercel deployment, earning 50+ GitHub stars and community adoption.',
    link: { href: 'https://nextjs-seo-blog-starter.vercel.app', label: 'View demo' },
  },
  {
    name: 'BotHub: P2P AI Chatbot Platform & Marketplace',
    description:
      'Built a peer-to-peer chatbot platform combining real-time conversations, bot discovery, ratings, and integrated payments to help developers monetise custom AI agents using ChatGPT API.',
    link: { href: 'mailto:keronelau@gmail.com?subject=BotHub%20Demo', label: 'Request demo' },
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description:
    'Selected research and product initiatives spanning scientific machine learning, robotics, analytics, community platforms, and developer tooling.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects Portfolio"
      intro="A broad look at the research, product, and community initiatives I’ve led—from physics-informed ML and surgical vision to analytics platforms, open-source tooling, and knowledge communities."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

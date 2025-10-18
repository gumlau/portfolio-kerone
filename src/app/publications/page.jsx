import clsx from 'clsx'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const contactEmail = 'keronelau@gmail.com'

const publications = [
  {
    id: 'surgmast3r-slam',
    index: 1,
    title:
      'SurgMASt3R-SLAM: Robust Real-Time Surgical Scene 3D Reconstruction by Adapting 3D Foundation Model',
    link: 'https://anonymous.4open.science/w/SurgMASt3R-SLAM-4183/',
    cta: 'View project site',
    authors: [
      { name: 'Xiaoxi Lu', affiliation: '1' },
      { name: 'Gan Liu', affiliation: '1', emphasis: true },
      { name: 'Bingwen Dong', affiliation: '1' },
      { name: 'Guangcheng Chen' },
      { name: 'Mingdao Gong' },
      { name: 'Yan Hu' },
      { name: 'Xiaoqing Zhang' },
      { name: 'Jiang Liu' },
    ],
    tagline:
      'Robust real-time surgical scene 3D reconstruction by adapting 3D foundation model.',
    meta: 'Submitted to IEEE International Conference on Robotics and Automation (ICRA), 2026. [Under Review]',
    status: 'Under Review',
    year: 2026,
  },
  {
    id: 'retinal-surgical-depth-estimation',
    index: 2,
    title:
      'Retinal Surgical Depth Estimation: A Synthetic Dataset and Domain Adaptation Approach for Enhanced Depth Perception in Ophthalmic Procedures',
    authors: [
      { name: 'Bingwen Dong', affiliation: '1' },
      { name: 'Gan Liu', affiliation: '1', emphasis: true },
      { name: 'Xiaoxi Lu', affiliation: '1' },
      { name: 'Jiang Liu' },
    ],
    tagline:
      'Synthetic dataset and domain adaptation pipeline for improved depth perception in ophthalmic procedures.',
    meta: 'Manuscript in preparation, targeted journal submission, 2025.',
    status: 'In Preparation',
    year: 2025,
  },
  {
    id: 'wave-cdanet',
    index: 3,
    title:
      'Wave-CDAnet: A Physics-Informed Neural Network for Super-Resolution Modeling of Water Waves',
    authors: [
      { name: 'Gan Liu', emphasis: true },
      { name: 'Jianuo Zhu' },
      { name: 'Peng Zhan' },
    ],
    tagline:
      'Physics-informed neural network architecture for super-resolution water wave modeling.',
    meta: 'Manuscript in preparation, targeted journal submission, 2025.',
    status: 'In Preparation',
    year: 2025,
  },
]

const buildMailtoLink = (title) => {
  const subject = encodeURIComponent(`[Publication Inquiry] ${title}`)
  const body = encodeURIComponent(
    `Hello Gan,\n\nI would like to learn more about your publication titled "${title}".\n\nBest regards,\n`,
  )

  return `mailto:${contactEmail}?subject=${subject}&body=${body}`
}

function AuthorsLine({ authors }) {
  return (
    <p className="relative z-10 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
      {authors.map((author, index) => (
        <span key={author.name} className={clsx(author.emphasis && 'font-semibold text-zinc-800 dark:text-zinc-100')}>
          {author.name}
          {author.affiliation && (
            <sup className="ml-0.5 text-[0.65em] font-medium text-zinc-500 dark:text-zinc-400">
              {author.affiliation}
            </sup>
          )}
          {index < authors.length - 1 && <span>, </span>}
        </span>
      ))}
    </p>
  )
}

export const metadata = {
  title: 'Publications',
  description:
    'Peer-reviewed submissions and manuscripts in robotics, medical imaging, and physics-informed machine learning.',
}

export default function PublicationsPage() {
  return (
    <SimpleLayout
      title="Academic Publications"
      intro="A curated record of my scholarly contributions spanning robotics, surgical vision, and scientific machine learning. Click any entry to request a preprint or further details."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2"
      >
        {publications.map((publication) => {
          const href = publication.link ?? buildMailtoLink(publication.title)

          return (
            <Card as="li" key={publication.id} id={publication.id}>
              <Card.Eyebrow decorate>
                [{publication.index}] {publication.year} • {publication.status}
              </Card.Eyebrow>
              <Card.Title href={href}>{publication.title}</Card.Title>
              <AuthorsLine authors={publication.authors} />
              <Card.Description>
                <em>{publication.tagline}</em>
              </Card.Description>
              <p className="relative z-10 mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                {publication.meta}
              </p>
              <Card.Cta>{publication.cta ?? 'Request preprint'}</Card.Cta>
            </Card>
          )
        })}
      </ul>
    </SimpleLayout>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    "I'm Gan Liu, a Computer Science student researching scientific machine learning, robotics, and data-driven decision systems across academic and industry collaborations.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Scientific Machine Learning Researcher and Applied Data Scientist
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a Computer Science student at SUSTech focused on scientific machine learning and robotics. My research spans 
              physics-informed modeling, surgical vision, and agricultural analytics—domains where rigorous computation meets 
              impactful real-world deployments.
            </p>
            <p>
              At McGill University, I build machine learning pipelines that fuse multitemporal drone imagery with agronomic 
              expertise to forecast crop yield and seed quality. Previously at Wego Singapore, I translated business questions 
              into data products—launching a strategic planning dashboard that lifted decision-making efficiency by 300% and 
              presenting market insights at international conferences in Dubai and Japan.
            </p>
            <p>
              My projects explore frontier intersections of AI and physical systems—from Wave-CDAnet, a physics-informed neural 
              network for water wave super-resolution, to event-based depth estimation for ophthalmic surgery and biomimetic 
              underwater robotics funded by municipal innovation grants.
            </p>
            <p>
              I&apos;m an active contributor to academic collaborations, with manuscripts under review at ICRA and in preparation 
              for surgical vision and scientific computing journals. Whether in research labs or product teams, I thrive on 
              bridging rigorous analysis with clear communication and collaborative execution.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mb-8">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              <svg className="h-6 w-6 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
              <span className="ml-3">Core Competencies</span>
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Applied Mathematics & Modeling</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Partial Differential Equations, Numerical Methods, Scientific Computing, Fluid Dynamics Modeling</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Machine Learning for Science</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Physics-Informed Neural Networks, Spatiotemporal Modeling, Computer Vision, Deep Learning Architectures</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Programming & Tools</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Python, PyTorch, MATLAB, C++, SQL, Git, CUDA, LaTeX</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Data & Visualization</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Multivariate Analysis, Time-Series Modeling, Synthetic Data Generation, Scientific Visualization (Matplotlib, ParaView)</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Research & Communication</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Academic Writing, Technical Documentation, Cross-disciplinary Collaboration, Conference Presentations</p>
              </div>
            </div>
          </div>
          <ul role="list">
            <SocialLink href="mailto:keronelau@gmail.com" icon={MailIcon}>
              keronelau@gmail.com
            </SocialLink>
            <SocialLink href="https://github.com/gumlau" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/ganliu-dev"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

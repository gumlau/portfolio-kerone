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
    "I'm Gan Liu, an AI Product Developer and Data Scientist with experience in machine learning, product strategy, and business analytics across multiple continents.",
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
            AI Product Developer, Data Scientist, and Entrepreneur
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a Computer Science student at SUSTech with a passion for building products that solve real-world problems. 
              My journey spans from founding Lumilib, a knowledge curation platform serving 30,000+ readers, to developing 
              machine learning pipelines for agricultural research at McGill University.
            </p>
            <p>
              Currently, I&apos;m gaining international experience through research at McGill University and business development 
              at WeGo Singapore. My technical expertise includes Python, JavaScript, machine learning, and modern web 
              technologies like Next.js and TypeScript. I&apos;m particularly skilled at bridging the gap between complex 
              technical solutions and user-centered product experiences.
            </p>
            <p>
              I&apos;ve been recognized for my work, including winning Silver Prize in the Shokz Cup Competition and securing 
              government funding for innovative AI projects. I&apos;m passionate about using AI and data science to create 
              meaningful impact, whether that&apos;s through optimizing agricultural yields, building community platforms, 
              or developing intuitive user interfaces.
            </p>
            <p>
              Beyond coding, I enjoy presenting at international conferences and have spoken in Dubai and Japan about 
              strategic planning and product insights. I believe in &ldquo;first-hand rather than retold, timeless rather 
              than trending&rdquo; — a philosophy that drives both my content curation work and product development approach.
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
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Product Management</h3>
                <p className="text-zinc-600 dark:text-zinc-400">User Research, Product Strategy, MVP Design, Roadmap Planning, Cross-functional Collaboration</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">AI/ML Product Development</h3>
                <p className="text-zinc-600 dark:text-zinc-400">LLM Integration, Computer Vision Applications, AI-Human Interaction Design</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Technical Skills</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Python, JavaScript, SQL, Git, Cursor, GitHub Copilot, Claude Code</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Low-code/No-code Platforms</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Figma, Webflow, Tableau, Power BI (experienced with rapid prototyping workflows)</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Data & Analytics</h3>
                <p className="text-zinc-600 dark:text-zinc-400">User Behavior Analysis, A/B Testing, KPI Design, Business Intelligence, BigQuery</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Design & UX</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Information Architecture, Interaction Design, User Journey Mapping, Wireframing</p>
              </div>
            </div>
          </div>
          <ul role="list">
            <SocialLink href="mailto:gan.liu@mail.mcgill.ca" icon={MailIcon}>
              gan.liu@mail.mcgill.ca
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

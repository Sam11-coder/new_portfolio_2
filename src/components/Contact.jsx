import { site } from '../data/site'
import { EmailIcon, LinkedInIcon } from './Icons'
import ButtonLink from './ButtonLink'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="reveal relative overflow-hidden rounded-2xl px-6 py-10 sm:px-10 sm:py-12 bg-card border border-line">
        <div className="hero-dots absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="hero-glow absolute -bottom-48 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none" aria-hidden="true" />

        <div className="relative">
          <p className="font-mono text-xs mb-3 text-accent">~/contact</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-heading">Want to work together?</h2>
          <p className="text-base max-w-xl leading-relaxed mb-8 text-body">
            I'm looking for co-op and internship roles in IT, cloud or security. Email is the best way to reach me.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${site.email}`} variant="primary">
              <EmailIcon className="w-4 h-4" />
              {site.email}
            </ButtonLink>
            <ButtonLink href={site.linkedin} external>
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

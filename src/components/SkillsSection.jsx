import { skillGroups } from '../data/skills'
import { SkillIcon } from './Icons'
import SectionHeading from './SectionHeading'

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading path="skills" title="What I work with">
        Things I've actually used in projects, labs and coursework.
      </SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
        {skillGroups.map((group) => (
          <div
            key={group.heading}
            className={`reveal rounded-2xl p-6 border border-line-strong ${group.learning ? 'border-dashed' : 'bg-card'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg text-accent bg-accent/12">
                <SkillIcon name={group.icon} />
              </span>
              <h3 className="text-sm font-semibold text-heading">{group.heading}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface text-body border border-line">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

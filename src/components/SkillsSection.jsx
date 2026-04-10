const skillCategories = [
  {
    heading: 'Languages & Scripting',
    skills: ['Python', 'Bash'],
  },
  {
    heading: 'Cloud & DevOps',
    skills: ['AWS (GuardDuty, EC2)', 'Docker', 'Cloudflare'],
  },
  {
    heading: 'Operating Systems & Infrastructure',
    skills: ['Linux', 'Linux Servers (Ubuntu)'],
  },
  {
    heading: 'Networking & Security',
    skills: ['OPNsense (Firewall)', 'VirtualBox'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h2
          className="text-3xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--text-heading)' }}
        >
          Skills
        </h2>
        <p className="text-sm max-w-lg" style={{ color: 'var(--text-body)' }}>
          Technologies and tools I work with, derived from hands-on project experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger">
        {skillCategories.map((category) => (
          <div
            key={category.heading}
            className="animate-fade-in-up rounded-2xl p-6"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            <h3
              className="text-sm font-semibold mb-4"
              style={{ color: 'var(--text-heading)' }}
            >
              {category.heading}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: 'var(--bg-status)',
                    color: 'var(--accent)',
                    border: '1px solid var(--border)',
                  }}
                >
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

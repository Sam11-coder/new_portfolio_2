const items = [
  {
    label: 'Cloud-Ready Thinking',
    text: 'Studying the concepts behind cloud platforms like AWS by actively applying service isolation and internal networking rules in my own lab.',
  },
  {
    label: 'Systems Deployment',
    text: 'Gaining practical experience by deploying, configuring, and troubleshooting complex software stacks, databases, and network firewalls.',
  },
  {
    label: 'The Mindset',
    text: 'Approaching IT challenges by balancing security with user convenience, and performance with resource constraints.',
  },
]

export default function CloserSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-heading)' }}>
          How My Homelab Experience Translates
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--text-body)' }}>
          My local projects are designed to build a foundation for enterprise environments.
        </p>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={item.label}>
              {i > 0 && <hr style={{ borderColor: 'var(--border)' }} className="my-0" />}
              <div className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8 py-5">
                <h3 className="text-sm font-semibold" style={{ color: 'var(--text-heading)' }}>
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

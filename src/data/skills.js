// Skills shown in the "What I work with" section.
// icon is one of: cloud, server, shield, code, database, sparkle
// learning: true shows the card with a dashed border ("still learning")

export const skillGroups = [
  {
    heading: 'Cloud and DevOps',
    icon: 'cloud',
    skills: ['AWS (EC2, GuardDuty)', 'Azure', 'Docker', 'Docker Compose', 'Terraform', 'Packer', 'Ansible', 'Jenkins', 'Git, GitHub, GitLab'],
  },
  {
    heading: 'Systems and networking',
    icon: 'server',
    skills: ['Linux', 'Ubuntu Server', 'Windows Server', 'TCP/IP', 'OPNsense', 'Nginx', 'Cloudflare Tunnels', 'VirtualBox'],
  },
  {
    heading: 'Security',
    icon: 'shield',
    skills: ['AWS GuardDuty', 'Trivy image scans', 'Firewall rules', 'Password hashing', 'SQL injection testing'],
  },
  {
    heading: 'Languages',
    icon: 'code',
    skills: ['Python', 'Bash', 'SQL', 'JavaScript'],
  },
  {
    heading: 'Apps and data',
    icon: 'database',
    skills: ['React', 'Node.js', 'Flask', 'MySQL', 'Redis', 'pandas', 'Tableau', 'JMeter'],
  },
  {
    heading: 'Learning now',
    icon: 'sparkle',
    learning: true,
    skills: ['Kubernetes', 'Redpanda (Kafka)', 'Local AI with Ollama'],
  },
]

// Count of tools I've actually used (not counting the "learning now" card)
export const toolCount = new Set(
  skillGroups.filter((g) => !g.learning).flatMap((g) => g.skills),
).size

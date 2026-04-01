export const statusItems = [
  { name: 'ZipHQ Dashboard', status: 'online' },
  { name: 'Ubuntu Server — Node 1 Core Services', status: 'online' },
  { name: 'AI Rig — Node 2 Compute Engine', status: 'online' },
]

export const projects = [
  {
    slug: 'enterprise-erp-sandbox',
    title: 'Enterprise ERP Sandbox',
    summary:
      'Configured a local network environment to safely test software deployments, practicing the fundamentals of routing, load balancing, and high availability.',
    tags: ['Network Simulation', 'ERP', 'Enterprise IT'],
    detail: {
      overview:
        'Built an isolated virtual network using VirtualBox to replicate a multi-tier enterprise environment. This sandbox runs a full ERP stack (SAP-style) with separate VMs for the application server, database, and client workstations — connected via internal-only networking that mirrors a production VLAN setup.',
      architecture: [
        'Application Server VM — Hosts the ERP web interface and business logic',
        'Database VM — Dedicated PostgreSQL instance with automated backups',
        'Client VMs — Simulated end-user workstations for UAT testing',
        'Internal DNS — Custom DNS resolution within the isolated network',
        'NAT Gateway — Controlled external access for package updates only',
      ],
      techStack: ['VirtualBox', 'Ubuntu Server', 'PostgreSQL', 'Nginx', 'Bash Automation'],
      keyDecisions: [
        'Used host-only networking to guarantee complete isolation from the home network — no accidental data leaks during testing.',
        'Automated VM provisioning with shell scripts so the entire environment can be torn down and rebuilt in under 10 minutes.',
        'Configured snapshot-based rollbacks to test destructive operations (migrations, upgrades) without risk.',
      ],
    },
  },
  {
    slug: 'homelab-infrastructure',
    title: 'Distributed Homelab Infrastructure',
    summary:
      'Operating a multi-node home network to learn how distributed services function, focusing on centralized monitoring and server administration.',
    tags: ['Infrastructure', 'Networking', 'DevOps'],
    detail: {
      overview:
        'A two-node distributed system where each machine has a clear role: the Dell OptiPlex handles core services (DNS, reverse proxy, storage, monitoring), while a custom-built PC handles compute-heavy workloads like LLM inference and GPU tasks. Both nodes are managed through infrastructure-as-code patterns.',
      architecture: [
        'Node 1 (Core Services) — Dell OptiPlex running Ubuntu Server: Nginx reverse proxy, Cloudflare Tunnel, Docker services',
        'Node 2 (Compute Engine) — Custom PC running Arch Linux: GPU workloads, LLM hosting, batch processing',
        'Networking — Cloudflare for DNS and TLS termination, internal service mesh via Docker networks',
        'Monitoring — Uptime checks and service health dashboards',
      ],
      techStack: ['Ubuntu Server', 'Arch Linux', 'Docker', 'Cloudflare', 'Nginx', 'SSH'],
      keyDecisions: [
        'Separated compute from core services to avoid resource contention — the same pattern used in cloud architectures with dedicated worker nodes.',
        'Used Cloudflare Tunnels instead of port forwarding to eliminate the attack surface of exposing ports to the public internet.',
        'Standardized on Docker for all services to ensure reproducibility and easy migration between nodes.',
      ],
    },
  },
  {
    slug: 'ai-compute-platform',
    title: 'Local AI Compute Platform',
    summary:
      'Assembled a custom Arch Linux workstation to host local large language models, gaining hands-on experience with hardware resource allocation and remote access.',
    tags: ['AI/ML', 'GPU Computing', 'Cost Optimization'],
    detail: {
      overview:
        'A purpose-built machine running Arch Linux, optimized for local LLM inference and AI experimentation. This setup eliminates recurring API costs for development and testing, while keeping sensitive data entirely on-premises — a key requirement for many enterprise AI deployments.',
      architecture: [
        'GPU Stack — NVIDIA drivers + CUDA toolkit for accelerated inference',
        'Model Serving — Local inference server for LLM hosting',
        'API Layer — REST endpoints that mirror cloud AI APIs for easy integration',
        'Storage — Fast NVMe for model weights, bulk storage for datasets',
      ],
      techStack: ['Arch Linux', 'CUDA', 'Python', 'Docker', 'Nginx'],
      keyDecisions: [
        'Chose Arch Linux for its rolling releases and minimal overhead — every package is intentional, no bloat competing for GPU resources.',
        'Designed the API layer to be compatible with OpenAI\'s API format, making it a drop-in replacement for cloud AI in development workflows.',
        'Implemented model swapping so different LLMs can be loaded on demand without restarting the service.',
      ],
    },
  },
  {
    slug: 'cloudflare-security',
    title: 'Zero-Trust Network Access',
    summary:
      'Configured secure, remote access for public-facing services using Cloudflare Tunnels, learning how to protect internal tools without exposing local firewall ports.',
    tags: ['Security', 'Zero Trust', 'Cloudflare'],
    detail: {
      overview:
        'Rather than exposing services directly to the internet, all traffic flows through Cloudflare Tunnels with access policies. This means no open ports on the home network, TLS everywhere, and identity-based access control — the same zero-trust principles that enterprises are migrating toward.',
      architecture: [
        'Cloudflare Tunnel — Outbound-only connections from the server to Cloudflare\'s edge',
        'Access Policies — Identity-aware rules controlling who can reach each service',
        'DNS Management — All domains managed through Cloudflare with DNSSEC',
        'WAF Rules — Web Application Firewall filtering malicious traffic before it reaches origin',
      ],
      techStack: ['Cloudflare Tunnel', 'Cloudflare Access', 'DNSSEC', 'WAF', 'TLS'],
      keyDecisions: [
        'Chose tunnels over traditional port forwarding to eliminate the entire class of vulnerabilities associated with exposed ports.',
        'Configured per-service access policies so each application has its own authentication requirements.',
        'Enabled full strict TLS mode end-to-end — no mixed content, no downgrade attacks.',
      ],
    },
  },
]

export const fleet = [
  {
    name: 'Core Services Server',
    role: 'Runs primary services, networking, and storage',
    hardware: 'Dell OptiPlex',
    os: 'Ubuntu Server',
    icon: 'server',
  },
  {
    name: 'AI Compute Rig',
    role: 'Heavy workloads, LLM hosting, GPU tasks',
    hardware: 'Custom PC',
    os: 'Arch Linux',
    icon: 'cpu',
  },
  {
    name: 'Enterprise Sandbox',
    role: 'Isolated ERP network simulation',
    hardware: 'Local Laptop',
    os: 'VirtualBox (isolated VM network)',
    icon: 'shield',
  },
]

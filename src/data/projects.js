// ============================================================
// SOLO PROJECTS
// ============================================================
export const soloProjects = [
  // --- Project 1: Python Store Application ---
  {
    slug: 'python-store-application',
    title: 'Python Store Application',
    summary:
      'A comprehensive digital store application built entirely in Python, designed to handle inventory and simulate transactional workflows.',
    tags: ['Python', 'OOP', 'CLI'],
    github: 'https://github.com/Sam11-coder/pyhton_store',
    liveDemo: 'https://store.sameerahmadi.com/',
    liveDemoStatus: 'Not done yet, adding password hashing and login',
    whyBuilt:
      'To solidify my understanding of core programming concepts, data structures, and object-oriented programming (OOP) principles using a highly versatile language.',
    detail: {
      overview:
        'A comprehensive digital store application built entirely in Python, designed to handle inventory and simulate transactional workflows. Built to solidify core programming concepts, data structures, and OOP principles.',
      architecture: [
        'Inventory System: Manages product catalog with CRUD operations',
        'Transaction Engine: Simulates purchase workflows and order processing',
        'Data Layer: Persistent storage for products and transaction history',
      ],
      techStack: ['Python'],
      keyDecisions: [
        'Used object-oriented design to model real-world store entities and their relationships.',
        'Focused on clean, readable code structure to practice Python best practices.',
      ],
    },
  },

  // --- Project 2: Self-Hosted Infrastructure & DevOps Server ---
  {
    slug: 'self-hosted-server',
    title: 'Self-Hosted Infrastructure & DevOps Server',
    summary:
      'A custom-built, self-hosted server environment leveraging Docker for containerization and Cloudflare for secure networking and reverse proxying.',
    tags: ['DevOps', 'Docker', 'Cloudflare'],
    whyBuilt:
      'To gain hands-on, practical experience with modern DevOps practices, system administration, and managing a live, production-like networking environment from the ground up.',
    detail: {
      overview:
        'A custom-built, self-hosted server environment. It leverages Docker for clean, isolated containerization of services and uses Cloudflare for secure networking, DNS management, and reverse proxying.',
      architecture: [
        'Ubunto Server: Base operating system optimized for server workloads',
        'Docker Containers: Isolated services for clean deployment and management',
        'Cloudflare Integration: DNS management, reverse proxying, and secure networking',
        'Networking Layer: Custom configuration for service routing and access control',
      ],
      techStack: ['Ubunto Server', 'Docker', 'Cloudflare'],
      keyDecisions: [
        'Chose Arch Linux for its minimal footprint and rolling release model, giving full control over every installed package.',
        'Used Docker to isolate services, making deployments reproducible and easy to manage.',
        'Leveraged Cloudflare for secure external access without exposing firewall ports.',
      ],
    },
  },

  // --- Project 3: CIT Program Labs ---
  {
    slug: 'cit-labs',
    title: 'CIT Program Labs',
    summary:
      'A curated collection of advanced networking and system administration labs focusing on secure network routing, system configuration, and network exploration tools.',
    tags: ['Networking', 'Sysadmin'],
    detail: {
      overview:
        'A curated collection of advanced networking and system administration labs completed throughout the Computer Information Technology (CIT) program, focusing on secure network routing, system configuration, and network exploration tools.',
      architecture: [
        'Network Routing Labs: Configuring and securing network routes across subnets',
        'System Administration: Windows Server and Linux server management',
        'Network Scanning: Using nmap and related tools for network exploration',
        'Protocol Analysis: Working with various TCP/IP protocols',
      ],
      techStack: ['Windows Server', 'Linux', 'TCP/IP', 'Virtual box '],
      keyDecisions: [
        'Documented each lab thoroughly to serve as a reference for networking concepts.',
        'Focused on practical, hands-on exercises that mirror real-world IT environments.',
      ],
    },
  },
]

// ============================================================
// DUO PROJECTS
// ============================================================
export const duoProjects = [
  // --- Project 4: ERP System Architecture ---
  {
    slug: 'erp-architecture',
    title: 'Enterprise Resource Planning (ERP) System Architecture',
    summary:
      'A highly available ERP architecture designed across multiple virtualized servers with secure intra-server routing and firewall management using OPNsense.',
    tags: ['Virtualization', 'Networking', 'Firewall'],
    github: 'https://github.com/nav-azizi/erp_project',
    whyBuilt:
      'To understand the complexities of architecting high-availability enterprise environments and to practice deploying robust, secure internal networks for business applications.',
    detail: {
      overview:
        'A highly available ERP architecture designed across multiple virtualized servers. The project heavily emphasizes secure intra-server routing and firewall management using OPNsense.',
      architecture: [
        'Multiple Virtual Servers: Distributed ERP components across VMs for high availability',
        'OPNsense Firewall: Centralized firewall managing inter-server communication',
        'Internal Network: Secure routing between virtualized server instances',
        'VirtualBox Environment: Full virtualization platform hosting the architecture',
      ],
      techStack: ['VirtualBox', 'OPNsense', 'Multiple Virtual Servers'],
      keyDecisions: [
        'Used OPNsense as the central firewall to practice enterprise-grade network security.',
        'Distributed ERP services across multiple VMs to simulate real high-availability deployments.',
        'Designed secure routing rules to control traffic between server tiers.',
      ],
    },
  },

  // --- Project 5: AWS Automated Incident Response ---
  {
    slug: 'aws-automated-incident-response',
    title: 'AWS Automated Incident Response',
    summary:
      'An automated, self-defending cloud network that uses a honeypot server and AWS GuardDuty to detect and block attackers in real time.',
    tags: ['AWS', 'Cloud Security', 'Automation'],
    github: 'https://github.com/Sam11-coder/AWS-Automated-Incident-Response',
    whyBuilt:
      'To deepen my expertise in cloud security and learn how to leverage automation to eliminate the need for manual intervention during active network threats.',
    detail: {
      overview:
        'An automated, self-defending cloud network that acts as a digital bouncer. It utilizes a purposefully vulnerable "honeypot" server to bait attackers. When AWS GuardDuty detects malicious scanning or intrusion attempts, it instantly triggers a custom Python script that extracts the attacker\'s IP and updates the main firewall to permanently block them.',
      architecture: [
        'Honeypot Server: Intentionally vulnerable EC2 instance to attract attackers',
        'AWS GuardDuty: Continuous threat detection monitoring for malicious activity',
        'Python Automation Script: Extracts attacker IPs and updates firewall rules',
        'Security Group Firewall: Dynamically updated to block detected threats',
      ],
      techStack: ['AWS GuardDuty', 'AWS EC2', 'Python'],
      keyDecisions: [
        'Used a honeypot approach to proactively attract and identify threats rather than waiting for attacks on production resources.',
        'Automated the full incident response pipeline, from detection to blocking, with zero manual intervention.',
        'Chose GuardDuty for its native AWS integration and ability to detect a broad range of threat patterns.',
      ],
    },
  },
]

// ============================================================
// GROUP PROJECTS
// ============================================================
export const groupProjects = [
  // --- Project 6: ZipHQ Performance Dashboard ---
  {
    slug: 'ziphq-performance-dashboard',
    title: 'ZipHQ Performance Dashboard',
    summary:
      'A live, production-ready performance dashboard built for ZipHQ that pulls real-time data via the Asana API and uses AI to generate actionable summaries.',
    tags: ['React', 'API Integration', 'AI', 'Testing'],
    privateRepo: true,
    detail: {
      overview:
        'A live, production-ready performance dashboard built for ZipHQ. It pulls real-time operational data via the Asana API and utilizes AI to generate actionable, readable summaries for stakeholders. The project is fortified with comprehensive backend unit testing and front-end Cypress testing to ensure reliability for the client.',
      architecture: [
        'React Frontend: Interactive dashboard UI with real-time data visualization',
        'Asana API Integration: Pulls live operational data for performance tracking',
        'AI Summarization: Generates actionable, readable summaries for stakeholders',
        'Cypress E2E Tests: Comprehensive front-end testing suite',
        'Backend Unit Tests: Thorough server-side test coverage',
      ],
      techStack: ['React', 'JavaScript', 'Asana API', 'AI Summarization', 'Cypress', 'Backend Unit Tests'],
      keyDecisions: [
        'Integrated AI summarization to transform raw Asana data into stakeholder-friendly insights.',
        'Used Cypress for end-to-end testing to ensure the dashboard is reliable for production use.',
        'Built comprehensive backend unit tests to maintain data integrity across API integrations.',
      ],
    },
  },
]

// All projects combined (used for the detail page route)
export const allProjects = [...soloProjects, ...groupProjects, ...duoProjects]

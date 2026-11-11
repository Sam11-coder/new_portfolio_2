// All projects live in one list.
//
// featured: true    shows the project as a big card at the top of the home page
// team              who built it: 'Solo', 'Duo', 'Team of 4', 'Team', 'Coursework'
// myPart            for team projects, what I did myself
// results           big numbers shown at the top of the project page
// flow              steps for the "How it works" diagram
// privateRepo       short note shown when the code can't be public
// status            shown when a project is still in progress
// images            screenshots: [{ src: '/screenshots/file.png', alt: 'what it shows' }]
//                   put the files in public/screenshots/

export const projects = [
  // ---------------------------------------------------------------
  {
    slug: 'ziphq-performance-dashboard',
    title: 'ZipHQ Performance Dashboard',
    team: 'Team',
    featured: true,
    summary:
      'A dashboard for a real client that pulls live project data from Asana and uses AI to write short summaries for managers.',
    tags: ['React', 'Asana API', 'AI', 'Cypress'],
    privateRepo: 'Client project, so the code is private',
    whyBuilt:
      "ZipHQ's managers were checking on projects by hand. We wanted them to open one page, see how each team was doing, and get a short summary they could read in a minute.",
    flow: ['Projects in Asana', 'Backend pulls the data', 'AI writes a summary', 'Dashboard in React'],
    howItWorks: [
      'The backend pulls live tasks and projects from the Asana API.',
      'The dashboard turns that data into charts that show how each team is doing.',
      'An AI model reads the same data and writes a summary in plain English.',
      'Cypress tests cover the front end and unit tests cover the backend.',
    ],
    techStack: ['React', 'JavaScript', 'Asana API', 'AI summaries', 'Cypress', 'Unit tests'],
    decisions: [
      "Added AI summaries because most managers don't want to dig through charts. A few sentences is often enough.",
      'Wrote Cypress tests for the front end so we would catch broken pages before the client did.',
      'Wrote backend unit tests to make sure the Asana data came through correctly every time.',
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: 'aws-automated-incident-response',
    title: 'AWS Automated Incident Response',
    team: 'Duo',
    featured: true,
    summary:
      'A small AWS setup that baits attackers with a honeypot, spots them with GuardDuty, and blocks their IP on its own.',
    tags: ['AWS', 'Cloud Security', 'Python'],
    github: 'https://github.com/Sam11-coder/AWS-Automated-Incident-Response',
    results: [{ value: 'Minutes to seconds', label: 'time to block an attacker, with no one at the keyboard' }],
    whyBuilt:
      "Normally someone has to see the alert, look up the IP and block it by hand. That takes time, and attackers don't wait. I wanted to see if I could take the person out of that loop.",
    flow: ['Attacker scans the honeypot', 'GuardDuty flags it', 'Python script grabs the IP', 'Firewall blocks it'],
    howItWorks: [
      'Honeypot: an EC2 server left open on purpose, so attackers find it first.',
      'AWS GuardDuty watches for scans and break-in attempts.',
      'When GuardDuty finds something, a Python script pulls the attacker\'s IP out of the alert.',
      'The script adds that IP to the firewall rules so it gets blocked.',
    ],
    techStack: ['AWS EC2', 'AWS GuardDuty', 'Python', 'Security Groups'],
    decisions: [
      "Used a honeypot so attackers hit a server that doesn't matter instead of the real one.",
      'Made the whole thing automatic, from alert to block, so it works even when nobody is watching.',
      'Picked GuardDuty because it is built into AWS and already knows a lot of attack patterns.',
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: 'ai-job-aggregator',
    title: 'AI Job Aggregator',
    team: 'Solo',
    featured: true,
    summary:
      'My own job search tool, built as small services. The backend takes in job posts, saves them and keeps live stats. Next, a local AI model will score each post for me.',
    tags: ['Microservices', 'Python', 'Docker', 'Redis'],
    privateRepo: 'Repo is private while I build it',
    status: 'In progress: backend works, the scraper and AI are next',
    whyBuilt:
      'Job hunting means reading the same kind of posting over and over. I already have a gaming PC with a decent GPU, so I figured I could run an AI model on it and let it do the first read for me.',
    flow: ['Job posts come in', 'Receiver checks them', 'Storage saves to MySQL', 'Worker keeps stats in Redis'],
    howItWorks: [
      'Receiver: the front door. It checks every event against an OpenAPI spec and passes it on.',
      'Storage: the only service allowed to touch MySQL, so each service owns its own data.',
      'Processing: a worker that keeps running stats, like the average match score, and stores them in Redis.',
      'It all runs with Docker Compose, and I load test it with JMeter to see how it handles a big batch of posts at once.',
      'Coming next: a scraper, the Qwen 2.5 model running in Ollama on my own GPU, and a message queue with Redpanda.',
    ],
    techStack: ['Python', 'Connexion', 'OpenAPI', 'MySQL', 'Redis', 'Docker Compose', 'JMeter', 'Ollama'],
    decisions: [
      'Split it into small services so I can change or restart one without touching the rest.',
      'Only the storage service can talk to the database. That keeps the other services simple.',
      'Running the AI on my own hardware means no API bills, and my data stays on my machine.',
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: 'adapt-ai',
    title: 'Adapt-AI for Google Classroom',
    team: 'Team',
    featured: true,
    summary:
      'A Chrome extension that helps teachers adapt assignments for students with dyslexia. I built the read-aloud feature.',
    tags: ['Chrome Extension', 'JavaScript', 'Accessibility', 'Gemini'],
    privateRepo: 'Sponsored project, so the code is private',
    myPart:
      "I built read-aloud for both the teacher and the student views. It reads the assignment out loud and highlights each word as it's spoken. Some voices don't report which word they're on, so I timed them myself and wrote a fallback that works out where the voice is.",
    whyBuilt:
      'Students with dyslexia often need their own version of an assignment, and making those by hand takes teachers a lot of time. This was our industry sponsored project (ISSP) at BCIT.',
    flow: ['Teacher opens an assignment', 'Gemini adapts it per student', 'Teacher reviews and edits', 'Student reads with read-aloud'],
    howItWorks: [
      'Adds an "Adapt Assignment" button right inside Google Classroom.',
      'Opens a review page with the original and the adapted version side by side.',
      'The teacher picks a student, reads why the AI changed things, then edits or accepts it.',
      'The backend runs on Google Apps Script and uses Gemini to adapt the text.',
      "Read-aloud uses the browser's built-in voices and highlights each word as it goes.",
    ],
    techStack: ['JavaScript', 'Chrome Extensions', 'Web Speech API', 'Google Apps Script', 'Gemini'],
    decisions: [
      "Used the browser's built-in speech, so read-aloud needs no extra service or cost.",
      "Measured how fast Google's voices actually talk at each speed, so the highlight stays in sync even when the voice gives no timing.",
      'Made separate teacher and student views. A teacher is checking the content, a student just wants to read.',
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: 'video-streaming-microservices',
    title: 'Video Streaming Microservices',
    team: 'Team of 4',
    summary:
      'A video upload and streaming site split into five Docker containers, with logins, a private network and automated tests.',
    tags: ['Docker', 'Microservices', 'Node.js', 'Flask'],
    privateRepo: 'Course project, repo is private',
    myPart: 'I wrote the Dockerfile and .dockerignore for the file storage service (fs-service).',
    results: [
      { value: '79%', label: 'smaller upload app image (1.65 GB down to 343 MB)' },
      { value: '6.6s to 1.2s', label: 'rebuild time after a code change' },
    ],
    whyBuilt:
      'This was our Docker project for ACIT 3495. We wanted it to look like a real app, not a hello world, and to do it properly: small images, nothing running as root, and no passwords in the code.',
    flow: ['Browser', 'Upload and stream apps', 'Auth service checks the login', 'File service and MySQL'],
    howItWorks: [
      'Two web apps face the user: one to upload videos and one to watch them.',
      'The login service, file service and database sit on a private network with no open ports.',
      "Every upload and stream checks the user's login token first.",
      'Videos stream in chunks, so you can skip ahead without loading the whole file.',
      'Named volumes keep the videos and database safe even if a container gets deleted.',
    ],
    techStack: ['Docker', 'Docker Compose', 'Node.js', 'Express', 'Python', 'Flask', 'MySQL', 'Trivy'],
    decisions: [
      'Multi-stage builds on slim base images, which made the upload app image 79% smaller.',
      'No container runs as root, and the tests check that.',
      'Trivy scans every image on each push. It caught an old PyJWT version, so we updated it.',
      'Health checks make sure the database is really ready before the apps start.',
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: 'erp-architecture',
    title: 'ERP System Across Multiple Servers',
    team: 'Duo',
    summary:
      'A business (ERP) system spread over several virtual servers, with an OPNsense firewall deciding which server can talk to which.',
    tags: ['Networking', 'Firewall', 'Virtualization'],
    github: 'https://github.com/nav-azizi/erp_project',
    whyBuilt:
      "Real companies don't run everything on one box. I wanted to see what it takes to set up a business system that keeps going if one server dies, and to lock down the traffic between servers.",
    flow: ['Request comes in', 'OPNsense checks the rules', 'Goes to the right ERP server', 'Everything else is blocked'],
    howItWorks: [
      'The ERP is split across several VMs, so one server going down does not take everything with it.',
      'OPNsense sits in the middle and controls all traffic between the servers.',
      'Each server can only reach the services it actually needs.',
      'Everything runs in VirtualBox.',
    ],
    techStack: ['VirtualBox', 'OPNsense', 'Linux', 'Networking'],
    decisions: [
      'Put OPNsense in the middle so all the traffic rules live in one place.',
      'Spread the ERP across VMs to get closer to how a mid-size company would run it.',
      'Started from "block everything" and only opened what each server needed.',
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: 'self-hosted-server',
    title: 'Home Server',
    team: 'Solo',
    summary:
      'A server at home that runs this portfolio and my store app in Docker. It is online through Cloudflare Tunnels with no open ports.',
    tags: ['Self-hosting', 'Docker', 'Cloudflare'],
    whyBuilt:
      'Reading about servers only gets you so far. I wanted something real that I have to keep running, update, and fix when it breaks.',
    flow: ['Visitor', 'Cloudflare', 'Tunnel to my server', 'Docker container'],
    howItWorks: [
      'Runs Ubuntu Server.',
      "Every app gets its own Docker container, so they can't mess with each other.",
      'Cloudflare handles DNS and sends traffic to the server through a tunnel.',
      'Nothing is port forwarded on my router.',
    ],
    techStack: ['Ubuntu Server', 'Docker', 'Docker Compose', 'Nginx', 'Cloudflare Tunnels'],
    decisions: [
      'Docker for every app, so I can rebuild or move one without breaking the rest.',
      'Cloudflare Tunnels instead of opening ports, which keeps my home network closed off.',
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: 'python-store-application',
    title: 'Python Store App',
    team: 'Solo',
    summary:
      'A store app in Python that keeps track of products, handles purchases and saves a record of every sale.',
    tags: ['Python', 'OOP'],
    github: 'https://github.com/Sam11-coder/pyhton_store',
    liveDemo: 'https://store.sameerahmadi.com/',
    status: 'In progress: adding logins with hashed passwords',
    whyBuilt:
      'I wanted to get really comfortable with object oriented programming, so I picked something with a lot of moving parts: products, stock and orders.',
    flow: ['Customer picks a product', 'App checks the stock', 'Purchase is saved', 'Stock and history update'],
    howItWorks: [
      'Inventory: add, view, update and remove products.',
      'Purchases: checks stock, takes the order and updates everything.',
      'Data: products and past sales are saved so nothing is lost on restart.',
    ],
    techStack: ['Python'],
    decisions: [
      'Gave each real thing in the store (product, order, inventory) its own class.',
      'Kept the code small and readable on purpose, so it is easy to add features like logins.',
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: 'cit-labs',
    title: 'CIT Networking and Sysadmin Labs',
    team: 'Coursework',
    summary:
      'Hands-on labs from my BCIT program: setting up servers, routing between networks and scanning with nmap.',
    tags: ['Networking', 'Sysadmin'],
    howItWorks: [
      'Routing labs: setting up and securing routes between subnets.',
      'Server labs: managing Windows Server and Linux machines.',
      'Scanning: using nmap to see what is running on a network.',
      'Protocols: working with TCP/IP and figuring out why things are not connecting.',
    ],
    techStack: ['Windows Server', 'Linux', 'TCP/IP', 'nmap', 'VirtualBox'],
    decisions: [
      'I wrote notes for every lab, so I have my own reference for networking topics.',
      'Most of what I learned came from things breaking and having to figure out why.',
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

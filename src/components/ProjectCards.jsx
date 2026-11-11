import { featuredProjects, otherProjects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function ProjectCards() {
  return (
    <section id="projects" className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading path="projects" title="Things I've built">
        My favourites are up top. Each card says whether I built it alone, with a partner or with a team.
      </SectionHeading>

      {/* Each card sits in its own .reveal wrapper so the slow scroll fade
          doesn't also slow down the card's quick hover effect */}
      <div className="grid md:grid-cols-2 gap-4 stagger">
        {featuredProjects.map((project) => (
          <div key={project.slug} className="reveal">
            <ProjectCard project={project} large />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-14 mb-5 reveal">
        <h3 className="text-lg font-semibold shrink-0 text-heading">More projects</h3>
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
        {otherProjects.map((project) => (
          <div key={project.slug} className="reveal">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

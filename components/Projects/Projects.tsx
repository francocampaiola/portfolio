import styles from './Projects.module.css'
import { Heading, Text } from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard/ProjectCard'
import { projects } from '../../constants/projects'

export const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.projects}>
        <Heading as="h2" size={'lg'}>Projects</Heading>
        <Text as="h3" fontWeight={'hairline'} marginTop={2}>A selection of my favorites works</Text>
        {
          projects.map((project, index) => (
            <ProjectCard key={index} id={project.id} name={project.name} description={project.description} technologies={project.technologies} />
          ))
        }
      </section>
    </>
  )
}

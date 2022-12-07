import styles from './Projects.module.css'
import { Heading, Text } from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard/ProjectCard'
import { projects } from '../../constants/projects'

export const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.projects}>
        <Heading justifyItems={'start'} fontWeight={'extrabold'}>
          Projects
        </Heading>
        <Text as="h3" fontWeight={'hairline'} marginTop={2} paddingBottom={5}>A selection of my favorites works</Text>
        {
          projects.map((project, index) => (
            <ProjectCard key={index} id={project.id} name={project.name} description={project.description} imageSrc={project.image} technologies={project.technologies} />
          ))
        }
      </section>
    </>
  )
}

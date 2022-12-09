import { Badge, Button, Center, Grid, GridItem, Heading, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard/ProjectCard'
import { projects } from '../../constants/projects'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.projects}>
        <Heading justifyItems={'start'} fontWeight={'extrabold'}>
          Projects
        </Heading>
        <Text as="h3" fontWeight={'hairline'} marginTop={2} paddingBottom={5}>A selection of my favorites works</Text>
        <Grid templateColumns={{ base: 'none', sm: 'repeat(2, 1fr)' }} gap={{ base: '0', sm: '2' }}>
          {
            projects.map((project, index) => (
              <GridItem key={index}> 
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  category={project.category}
                  imageSrc={project.image}
                  technologies={project.technologies}
                  repository={project.repository}
                  live={project.live}
                />
              </GridItem>
            ))
          }
        </Grid>
        <VStack marginTop={5} marginBottom={5} align={'start'}>
          <Center>
            <Button marginBottom={1} colorScheme={useColorModeValue("blue", "gray")} disabled>
              See all projects
            </Button>
            <Badge bg={'darkorchid'} color={useColorModeValue("black", "white")} zIndex={'1'} marginLeft={-7} marginTop={-10}>Soon</Badge>
          </Center>
        </VStack>
      </section>
    </>
  )
}

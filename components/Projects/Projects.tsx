import { Heading, Text } from '@chakra-ui/react'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <>
        <section id="projects" className={styles.projects}>
            <Heading as="h2" size={'lg'}>Projects</Heading>
            <Text as="h3" fontWeight={'hairline'} marginTop={2}>A selection of my favorites works</Text>
        </section>
    </>
  )
}

import { Container, Heading } from '@chakra-ui/react'
import styles from './About.module.css'

export const About = () => {

  return (
    <section id="about" className={styles.about}>
        <Heading paddingTop={'40px'}>About me</Heading>
    </section>
  )
}

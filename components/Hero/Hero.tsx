import { Avatar, Box, Button, Heading, HStack, Icon } from '@chakra-ui/react'
import styles from './Hero.module.css'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <HStack gap={5}  display={{ md: 'flex' }}>
        <Avatar
          size="4xl"
          name="Franco Campaiola"
          src="/hero.png"
          maxW={250}
          className={styles.avatar}
        />
        <Box>
          <Heading as="h1" size="2xl" mb={4} fontWeight={'bold'}>
            Hi, I&apos;m <strong>Franco Campaiola</strong>
          </Heading>
          <Heading as="h2" size="xl" mb={4} fontWeight={'thin'}>
            Software Developer
          </Heading>
          <HStack className={styles.social}>
            <Link href={'https://github.com/francocampaiola'} target="_blank">
              <Button variant={'unstyled'} _hover={{
                color: 'blue.500'
              }}>
                <Icon as={TbBrandGithub} boxSize={50} />
              </Button>
            </Link>
            <Link href={'https://www.linkedin.com/in/francocampaiola/'} target="_blank">
              <Button variant={'unstyled'} _hover={{
                color: 'blue.500'
              }}>
                <Icon as={TbBrandLinkedin} boxSize={50} />
              </Button>
            </Link>
          </HStack>
        </Box>
      </HStack>
    </section>
  )
}


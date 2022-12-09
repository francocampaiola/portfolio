import { useState } from 'react';
import { Box, Button, Center, Heading, HStack, Image, Spacer } from '@chakra-ui/react'
import { LongVersion } from './Versions/LongVersion';
import { ShortVersion } from './Versions/ShortVersion';
import styles from './About.module.css'

export const About = () => {

  const [buttonText, setButtonText] = useState("Read long version");
  const [showLongVersion, setShowLongVersion] = useState(false);

  function handleClick() {
    if (buttonText === "Read long version") {
      setButtonText("Read short version");
      setShowLongVersion(true);
    } else {
      setButtonText("Read long version");
      setShowLongVersion(false);
    }
  }

  return (
    <>
      <section id="about" className={styles.about}>
        <HStack>
          <Box maxW={{ base: '100%', sm: '65%' }}>
            <Heading justifyItems={'start'} fontWeight={'extrabold'}>
              About me
            </Heading>
            {showLongVersion && (
              <>
                <LongVersion />
                <Button variant={'solid'} onClick={handleClick}>{buttonText}</Button>
                <Spacer />
              </>
            ) || (
                <>
                  <ShortVersion />
                  <Button variant={'solid'} onClick={handleClick}>{buttonText}</Button>
                </>
              )}
          </Box>
          <Box display={{ base: 'none', sm: 'block' }}>
            <Image
              src="/about.png"
              alt="about"
              transition={"all 0.3s ease"}
              _hover={{
                transform: "scale(1.1)",
              }}
              boxSize="300px"
              objectFit={'cover'}
            />
          </Box>
        </HStack>
      </section>
    </>
  )
}

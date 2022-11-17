import { Box, Button, Heading, HStack, Image, Spacer } from '@chakra-ui/react'
import { useState } from 'react';
import styles from './About.module.css'
import { LongVersion } from './Versions/LongVersion';
import { ShortVersion } from './Versions/ShortVersion';

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
          <Box w={"65%"}>
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
          <Box>
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

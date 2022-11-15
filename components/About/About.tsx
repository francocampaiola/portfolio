import { Button, Heading } from '@chakra-ui/react'
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
        <Heading justifyItems={'start'} fontWeight={'extrabold'}>
          About me
        </Heading>
        {showLongVersion && (
          <>
            <LongVersion />
            <Button variant={'solid'} onClick={handleClick}>{buttonText}</Button>
          </>
        ) || (
            <>
              <ShortVersion />
              <Button variant={'solid'} onClick={handleClick}>{buttonText}</Button>
            </>
          )}
      </section>
    </>
  )
}

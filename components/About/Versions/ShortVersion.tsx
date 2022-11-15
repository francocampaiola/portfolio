import { Code, Text } from '@chakra-ui/react'
import React from 'react'

export const ShortVersion = () => {
    return (
        <>
            <Text fontSize={'md'} marginTop={'30px'}>
                I&apos;m a <Text as='b'>Software Developer</Text> with a passion for learning and creating, <Text as="kbd">focused on front-end development.</Text>
            </Text>
            <Text fontSize={'md'} marginTop={'20px'}>
                Currently, I&apos;m studying <Code>Web Design and Development</Code> at <Text as='b'>Da Vinci&apos;s School.</Text>
            </Text>
            <Text fontSize={'md'} marginTop={'20px'}>
                At the moment I&apos;m learning all the possible work environments of <Text as="i">web development</Text> to incorporate new skills.
            </Text>
            <Text fontSize={'md'} marginTop={'20px'} marginBottom={'30px'}>
                Since <Text as="b">August 2017</Text>, I have been working as a <Text as="em">Systems Analyst</Text> in a Pharmaceutical Laboratory located in Buenos Aires, Argentina.
            </Text>
        </>
    )
}

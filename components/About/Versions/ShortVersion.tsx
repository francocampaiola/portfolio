import { Code, Text } from '@chakra-ui/react'
import React from 'react'

export const ShortVersion = () => {
    return (
        <>
            <Text fontSize={'md'} marginTop={'30px'}>
                I&apos;m a <Text as='b'>Software Developer</Text> with a passion for learning and creating, <Text as="kbd">focused on front-end development.</Text>
            </Text>
            <Text fontSize={'md'} marginTop={'20px'} marginBottom={'30px'}>
                From that moment I began to internalize myself in work environments such as <Code>React.js, Nodejs, Next.js</Code>, focusing on UI and UX.
            </Text>
        </>
    )
}

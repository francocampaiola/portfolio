import { Box, Button, Center, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { social } from '../../constants/social'
import styles from './Contact.module.css'
import { ContactForm } from './ContactForm'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'

export const Contact = () => {
    return (
        <>
            <section id='contact' className={styles.contact}>
                <Heading justifyItems={'start'} fontWeight={'extrabold'}>
                    Contact
                </Heading>
                <Text as="h3" fontWeight={'hairline'} marginTop={2} paddingBottom={5}>Send me a message and I&apos;ll get back to you soon.</Text>
                <ContactForm />
                <Text as="h3" fontWeight={'hairline'} marginTop={'50px'} paddingBottom={2}>You can also reach me out on:</Text>
                <HStack>
                    {social.map((item, index) =>
                        <Box bgSize={'contain'} key={index}>
                            <Link href={item.url} target='_blank'>
                                <Button variant={'unstyled'}>
                                    <Icon fontSize={25}>
                                        {item.network === 'Github' && <AiFillGithub />}
                                        {item.network === 'Linkedin' && <AiFillLinkedin />}
                                        {item.network === 'Twitter' && <AiFillTwitterSquare />}
                                    </Icon>
                                </Button>
                            </Link>
                        </Box>
                    )}
                </HStack>
                <Center marginTop={50} marginBottom={15}>
                    <Text fontWeight={'hairline'}>
                        This website is <span style={{'textDecoration': 'underline', 'color': '#49657C', 'fontWeight': 'bold', 'fontStyle': 'italic'}}><Link href={'https://github.com/francocampaiola/portfolio'} target={'_blank'}>open source.</Link></span>
                    </Text>
                </Center>
            </section>
        </>
    )
}

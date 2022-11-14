import { FC } from 'react'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar/Navbar';

interface Props {
    children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
    const bg = useColorModeValue("rgb(255, 255, 255, 0.8)", "rgba(26, 33, 44, 0.8)");
    
    return (
        <>
            <Box w={'100%'} bg={bg} backdropFilter="saturate(180%) blur(5px)" position={'sticky'} top={0} zIndex={200}>
                <Container as="header" maxW={'5xl'} marginTop={'25px'}>
                    <Navbar />
                </Container>
            </Box>
            {children}
        </>
    )
}

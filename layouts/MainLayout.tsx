import { FC } from 'react'
import { Container } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar/Navbar';

interface Props {
    children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <Container maxW={'5xl'} marginTop={'25px'}>
            <Navbar />
            {children}
        </Container>
    )
}

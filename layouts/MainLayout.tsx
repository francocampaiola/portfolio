import { FC } from 'react'
import { Container } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <Container maxW={'5xl'} marginTop={'25px'}>
            {children}
        </Container>
    )
}

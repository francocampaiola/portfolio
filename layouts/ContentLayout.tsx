import { Container } from '@chakra-ui/react';
import React, { FC } from 'react'

interface Props {
    children: React.ReactNode;
}

export const ContentLayout : FC<Props> = ({children}) => {
  return (
    <Container maxW={'62em'}>
        {children}
    </Container>
  )
}

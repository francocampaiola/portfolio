import Link from 'next/link'
import { Button, Heading, HStack, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { menu } from '../../constants/menu'

export const Menu = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack gap={3}>
            {
                menu.map(
                    (item, index) => (
                        <Link key={index} href={'#' + item.url}>
                            <Heading fontSize={'sm'}>{item.name}</Heading>
                        </Link>
                ))
            }
            <Button>
                Get Resume
            </Button>
            <Button variant={'ghost'} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </HStack>
    )
}

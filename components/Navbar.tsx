import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Heading, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"

const menuItems = ['Home', 'About', 'Projects', 'Contact']

export const Navbar = () => {

    const { colorMode, toggleColorMode} = useColorMode();

    return (
        <HStack justify={'space-between'}>
            <Heading fontSize={'md'}>francocampaiola.</Heading>
            <HStack gap={3}>{menuItems.map(
                (item) =>
                    <Link href={'#' + item.toLowerCase()}>
                        <Heading fontSize={'md'}>{item}</Heading>
                    </Link>
            )}
            <Button variant={'outline'}>
                Get Resume
            </Button>
            <Button variant={'ghost'} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            </HStack>
        </HStack>
    )
}

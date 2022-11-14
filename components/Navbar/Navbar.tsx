import { Box, Flex, HStack, Spacer, useColorModeValue } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Navbar = () => {

    const bg = useColorModeValue("rgb(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)")

    return (
        <Box position="fixed" top={0} left={0} right={0} zIndex={10} bg={bg} backdropFilter="saturate(180%) blur(5px)">
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1.5rem"
            >
                <Logo />
                <Spacer />
                <HStack spacing={2} align="center">
                    <Menu />
                </HStack>
            </Flex>
        </Box>
    )
}

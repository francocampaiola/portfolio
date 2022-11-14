import { Box, Flex, HStack, Spacer, useColorModeValue } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Navbar = () => {
    return (
        <Box marginTop={'-25px'} top={0} zIndex={10}>
            <Flex
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

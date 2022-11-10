import { HStack } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Navbar = () => {
    return (
        <HStack justify={'space-between'}>
            <Logo />
            <Menu />
        </HStack>
    )
}

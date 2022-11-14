import Link from 'next/link'
import { Button, Heading, HStack, useColorMode, Menu as MenuChakra, MenuButton, MenuList, MenuItem, Show, IconButton, useDisclosure, Box, Stack, VStack, Flex, Portal, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { ChevronDownIcon, CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { menu } from '../../constants/menu'
import { SiNotion } from 'react-icons/si'
import { AiOutlineCloudDownload } from 'react-icons/ai'

export const Menu = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                variant={'ghost'}
                onClick={toggleColorMode}
                display={{ md: 'none' }}
            >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
                <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}
                >
                    {menu.map((item) => (
                        <Button variant={'ghost'}>
                            <Link key={item.id} href={`#${item.url}`}>{item.name}</Link>
                        </Button>
                    ))}
                    <MenuChakra>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                        >
                            Get Resume
                        </MenuButton>
                        <MenuList>
                            <MenuItem icon={<SiNotion />} fontSize={'md'} >
                                Read in Notion
                            </MenuItem>
                            <MenuItem icon={<AiOutlineCloudDownload />} fontSize={'md'}>
                                Download PDF
                            </MenuItem>
                        </MenuList>
                    </MenuChakra>
                    <Button variant={'ghost'} onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </HStack>
            </HStack>
            {isOpen ? (
                <Drawer
                    isOpen={isOpen}
                    onClose={onClose}
                    size={'full'}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            {
                                menu.map((item) => {
                                    return (
                                        <Button variant={'unstyled'}>
                                            <Link href={item.url} key={item.id}>{item.name}</Link>
                                        </Button>
                                    )
                                })
                            }
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            ) : null}
        </>
    )
}

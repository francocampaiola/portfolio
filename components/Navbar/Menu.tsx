import Link from 'next/link'
import { Button, Heading, HStack, useColorMode, Menu as MenuChakra, MenuButton, MenuList, MenuItem, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, Divider } from '@chakra-ui/react'
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
                icon={<HamburgerIcon />}
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
                        <Button variant={'ghost'} key={item.id}>
                            <Link href={`#${item.url}`}>{item.name}</Link>
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
                    size={'md'}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerCloseButton />
                            <Heading size={'xs'}>francocampaiola.</Heading>
                        </DrawerHeader>
                        <DrawerBody>
                            {
                                menu.map((item) => {
                                    return (
                                        <Heading size={'md'} paddingBottom={3} key={item.id}>
                                            <Link href={item.url}>{item.name}</Link>
                                        </Heading>
                                    )
                                })
                            }
                            <Divider orientation='horizontal' marginBottom={'25px'} marginTop={'10px'}/>
                            <MenuChakra>
                                <MenuButton
                                    as={Button}
                                    rightIcon={<ChevronDownIcon />}
                                    width={'100%'}
                                    fontSize={'md'}
                                >
                                    Get Resume
                                </MenuButton>
                                <MenuList>
                                    <MenuItem icon={<SiNotion />} fontSize={'md'}>
                                        Read in Notion
                                    </MenuItem>
                                    <MenuItem icon={<AiOutlineCloudDownload />} fontSize={'md'}>
                                        Download PDF
                                    </MenuItem>
                                </MenuList>
                            </MenuChakra>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            ) : null}
        </>
    )
}

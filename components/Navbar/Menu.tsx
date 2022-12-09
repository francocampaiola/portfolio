import Link from 'next/link'
import {
    Button,
    Heading,
    HStack,
    useColorMode,
    Menu as MenuChakra,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
    Divider,
    Badge
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SiNotion } from 'react-icons/si'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { menu } from '../../constants/menu'

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
                aria-label={'Open menu'}
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
                        <Link key={item.id} href={`#${item.url}`}>
                            <Button variant={'ghost'}>
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                    <MenuChakra>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                        >
                            Get Resume
                        </MenuButton>
                        <MenuList>
                            <MenuItem icon={<SiNotion />} fontSize={'md'} isDisabled>
                                Read in Notion
                                <Badge marginLeft={2} colorScheme={'blue'}>
                                    Soon
                                </Badge>
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
                    size={'xs'}
                    onOverlayClick={onClose}
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
                                            <Link href={`#${item.url}`} onClick={onClose}>{item.name}</Link>
                                        </Heading>
                                    )
                                })
                            }
                            <Divider orientation='horizontal' marginBottom={'25px'} marginTop={'10px'} />
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
                                    <MenuItem icon={<SiNotion />} fontSize={'md'} isDisabled>
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

import Link from 'next/link'
import { Button, Heading, HStack, useColorMode, Menu as MenuChakra, MenuButton, MenuList, MenuItem, Show, IconButton } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { menu } from '../../constants/menu'
import { SiNotion } from 'react-icons/si'
import { AiOutlineCloudDownload } from 'react-icons/ai'

export const Menu = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Show above='md'>
                <HStack gap={3}>
                    {
                        menu.map(
                            (item, index) => (
                                <Button key={index} variant={'ghost'} _hover={{
                                    color: 'blue.500'
                                }}>
                                    <Link  href={'#' + item.url}>
                                        <Heading fontSize={'sm'}>{item.name}</Heading>
                                    </Link>
                                </Button>
                            ))
                    }
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
            </Show>
            <Show below='md'>
                <HStack>
                    <MenuChakra size={'max-width: 500px'}>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            {menu.map(
                                (item, index) => (
                                    <MenuItem key={index}>
                                        <Link href={'#' + item.url}>
                                            <Heading fontSize={'sm'}>{item.name}</Heading>
                                        </Link>
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </MenuChakra>
                    <Button variant={'ghost'} onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </HStack>
            </Show>
        </>
    )
}

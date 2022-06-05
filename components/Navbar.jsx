import {
  Container,
  Avatar,
  HStack,
  Link,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
  Button
} from '@chakra-ui/react'

import { ColorModeSwitcher } from './ColorModeSwitcher'

export const Navbar = () => {
  return (
    <Container maxW="100%" bg={useColorModeValue("red", "blue")} pt={3} pb={3}>
    <Container maxW="60%">
      <Flex alignItems={'center'}>
          <Avatar size={'sm'}></Avatar>
          <HStack ml="20px">
            <Button colorScheme={useColorModeValue("red", "green")} variant='ghost' size={'md'}>
              <Link>Test 1</Link>
            </Button>
            <Button colorScheme={useColorModeValue("blue.500", "blue.300")} variant='ghost' size={'md'}>
              <Link>Test 1</Link>
            </Button>
            <Button colorScheme={useColorModeValue("blue.500", "blue.300")} variant='ghost' size={'md'}>
              <Link>Test 1</Link>
            </Button>
            <Button colorScheme={useColorModeValue("blue.500", "blue.900")} variant='ghost' size={'md'}>
              <Link>Test 1</Link>
            </Button>    
          </HStack>
          <Spacer />
          <HStack>
            <ColorModeSwitcher />
          </HStack>
      </Flex>
    </Container>
    </Container>
  )
}

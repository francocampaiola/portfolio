import { Icon, SlideFade, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

interface Props {
    scrollPosition: number
}

export const BackToTop: FC<Props> = ({ scrollPosition }) => {

    return (
        <>
            {scrollPosition > 500 && (
                <Link href='/#top'>
                    <Icon as={BsFillArrowUpCircleFill} position='fixed' display={{ base: 'none', sm: 'block' }}
                        bottom='20px'
                        right={['16px', '40px']}
                        zIndex={1}
                        fontSize={30} />
                </Link>
            )}
        </>

    )
}

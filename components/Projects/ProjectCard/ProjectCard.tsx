import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri'
import React, { FC } from 'react'
import { projects } from '../../../constants/projects';
import Link from 'next/link';

interface Props {
    id: string;
    name: string;
    description: string;
    category: string;
    imageSrc: string;
    technologies: string[];
    repository: string,
    live: string
}

export const ProjectCard: FC<Props> = ({ name, description, category, imageSrc, technologies, repository, live }) => {
    return (
        <>
            <Card direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                marginTop={5}
                marginBottom={5}
                borderRadius={'2xl'}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '50%' }}
                    src={imageSrc}
                    alt={name + " image"}
                />
                <Stack>
                    <CardBody>
                        <HStack marginBottom={2}>
                            <Heading size='md'>{name}</Heading>
                            <Badge
                                colorScheme={'gray'}
                            >
                                {category}
                            </Badge>
                        </HStack>
                        <Text py='2'>
                            {description}
                        </Text>
                        <Heading size={'sm'} marginTop={1}>Technologies</Heading>
                        {technologies.map((technology, index) => (
                            <Badge
                                key={index}
                                colorScheme='linkedin'
                                marginRight={2}
                                variant={'outline'}
                                fontSize={12}
                            >
                                {technology}
                            </Badge>
                        ))}
                    </CardBody>
                    <CardFooter>
                        <Stack direction={'row'} spacing={2}>
                            <Link href={repository} target='_blank'>
                                <Button leftIcon={<RiGithubLine />} variant='solid' colorScheme='blue' size='sm'>
                                    Source
                                </Button>
                            </Link>
                            <Link href={live} target='_blank'>
                                <Button leftIcon={<RiExternalLinkLine />} variant='solid' colorScheme='facebook' size='sm'>
                                    Site
                                </Button>
                            </Link>
                        </Stack>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

import { Badge, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    id: string,
    name: string;
    description: string;
    imageSrc: string,
    technologies: string[];
}


export const ProjectCard: FC<Props> = ({ name, description, imageSrc, technologies }) => {
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
                        <Heading size='md'>{name}</Heading>
                        <Text py='2'>
                            {description}
                        </Text>
                        {technologies.map((technology, index) => (
                            <Badge key={index} colorScheme='green' marginRight={2}>{technology}</Badge>
                        ))}
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

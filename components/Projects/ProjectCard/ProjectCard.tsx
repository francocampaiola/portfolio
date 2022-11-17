import { Badge, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    id: string,
    name: string;
    description: string;
    technologies: string[];
}


export const ProjectCard: FC<Props> = ({ name, description, technologies }) => {
    return (
        <>
            <Card direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                marginTop={5}
                marginBottom={5}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
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

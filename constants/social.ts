interface Social {
    id: number,
    network: string,
    icon: string,
    url: string;
}

export const social: Social[] = [
    {
        id: 1,
        network: 'Github',
        icon: 'AiFillGithub',
        url: 'https://github.com/francocampaiola',
    },
    {
        id: 2,
        network: 'Linkedin',
        icon: 'AiFillLinkedin',
        url: 'https://www.linkedin.com/in/francocampaiola/',
    },
    {
        id: 3,
        network: 'Twitter',
        icon: 'AiFillTwitterSquare',
        url: 'https://twitter.com/francocampaiola',
    }
]
interface Project {
    id: string;
    name: string;
    description: string,
    technologies: string[];
}

export const projects: Project[] = [
    {
        id: '1',
        name: 'Project 1',
        description: 'This is a description of project 1',
        technologies: ['React', 'TypeScript', 'JavaScript']
    },
    {
        id: '2',
        name: 'Project 2',
        description: 'This is a description of project 2',
        technologies: ['React', 'TypeScript', 'JavaScript']
    },
    {
        id: '3',
        name: 'Project 3',
        description: 'This is a description of project 3',
        technologies: ['React', 'TypeScript', 'JavaScript']
    }
]
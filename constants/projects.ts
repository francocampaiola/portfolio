interface Project {
    id: string;
    name: string;
    description: string,
    image: string,
    technologies: string[];
    repository?: string,
    live?: string
}

export const projects: Project[] = [
    {
        id: '1',
        name: 'Project 1',
        description: 'This is a description of project 1',
        image: 'https://www.eleconomista.com.mx/__export/1611802943981/sites/eleconomista/img/2021/01/27/fp-gastos1_280121w.jpg_673822677.jpg',
        technologies: ['React', 'TypeScript', 'JavaScript']
    },
    {
        id: '2',
        name: 'Project 2',
        description: 'This is a description of project 2',
        image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        technologies: ['React', 'TypeScript', 'JavaScript']
    },
    {
        id: '3',
        name: 'Project 3',
        description: 'This is a description of project 3',
        image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        technologies: ['React', 'TypeScript', 'JavaScript']
    }
]
interface Project {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    repository: string;
    live: string;
}

export const projects: Project[] = [
    {
        id: '1',
        name: 'Expense Control',
        description: 'Application to control budget and expenses in a personal way. Developed with localStorage to keep the information once refreshed.',
        category: 'app',
        image: 'https://www.eleconomista.com.mx/__export/1611802943981/sites/eleconomista/img/2021/01/27/fp-gastos1_280121w.jpg_673822677.jpg',
        technologies: ['React', 'Vite', 'JavaScript'],
        repository: 'https://github.com/francocampaiola/control-gastos-react',
        live: 'https://nostalgic-cray-aa09e6.netlify.app/'
    },
    {
        id: '2',
        name: 'Project 2',
        description: 'This is a description of project 2',
        category: 'app',
        image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        technologies: ['React', 'TypeScript', 'JavaScript'],
        repository: 'https://github.com/francocampaiola/control-gastos-react',
        live: 'https://nostalgic-cray-aa09e6.netlify.app/'
    },
    {
        id: '3',
        name: 'Project 3',
        description: 'This is a description of project 3',
        category: 'app',
        image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        technologies: ['React', 'TypeScript', 'JavaScript'],
        repository: 'https://github.com/francocampaiola/control-gastos-react',
        live: 'https://nostalgic-cray-aa09e6.netlify.app/'
    }
]
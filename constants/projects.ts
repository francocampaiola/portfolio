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
        name: 'PokeAPI',
        description: 'Discover and collect your favorite Pokemon with our app. Connect to the Pokemon API and save your favorites for quick access.',
        category: 'app',
        image: '/pokedex.webp',
        technologies: ['Next.js', 'TypeScript', 'NextUI', 'Vercel'],
        repository: 'https://github.com/francocampaiola/next-staticapp',
        live: 'https://next-staticapp.vercel.app/'
    },
    {
        id: '2',
        name: 'Expense Control',
        description: 'Application to control budget and expenses in a personal way. Developed with localStorage to keep the information once refreshed.',
        category: 'app',
        image: '/gastos.webp',
        technologies: ['React', 'Vite', 'JavaScript'],
        repository: 'https://github.com/francocampaiola/control-gastos-react',
        live: 'https://nostalgic-cray-aa09e6.netlify.app/'
    },
    {
        id: '3',
        name: 'Crypto Quote',
        description: 'Applicacion to stay on top of the cryptocurrency market with our real-time quotes app. Track your favorite coins and make the most of your investments.',
        category: 'app',
        image: '/crypto.jpg',
        technologies: ['React', 'Vite', 'JavaScript', 'Netlify'],
        repository: 'https://github.com/francocampaiola/criptos-react',
        live: 'https://blissful-newton-598445.netlify.app/'
    },
    {
        id: '4',
        name: 'Car Insurance App',
        description: 'Save time and money on your car insurance: compare multiple offers in one place and choose the coverage that fits your needs and budget.',
        category: 'web',
        image: '/insurance-car.jpg',
        technologies: ['React', 'Vite', 'JavaScript', 'Netlify'],
        repository: 'https://github.com/francocampaiola/cotizador-react',
        live: 'https://naughty-sammet-51901c.netlify.app/'
    }
]
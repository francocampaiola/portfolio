export interface Menu {
    id: number;
    name: string;
    url: string;
}

export const menu: Menu[] = [
    {
        id: 1,
        name: 'About',
        url: 'about'
    },
    {
        id: 2,
        name: 'Projects',
        url: 'projects'
    },
    {
        id: 3,
        name: 'Contact',
        url: 'contact'
    }
];

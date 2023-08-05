export type SectionItem = {
    id: string;
    title: string;
    link: string;
    activeClass?: string;
    description: string;
    links:ArrayLike<string>[];
}